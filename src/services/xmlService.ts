const XML_CONTENT_TYPE = 'text/xml';

const domParser = new DOMParser();

const parseXML = (xml: string): Document => domParser.parseFromString(xml, XML_CONTENT_TYPE); 

const fetchXML = async (url: string): Promise<Document> => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': XML_CONTENT_TYPE 
    }
  })
  return parseXML(await response.text());
}

/**
 * Parses an XML document to a JavaScript Object.
 * @param xml 
 */
const xmlToJson = (xml: Node): object => {
  let result = {};

  if (xml.nodeType === Node.ELEMENT_NODE) {
    for (let i = 0; i < xml.attributes.length; i++) {
      const attributeName = xml.attributes[i].name;
      const attributeValue = xml.attributes[i].value;
      result[attributeName] = attributeValue;
    }

    xml.childNodes.forEach(node => {
      const nodeName = node.nodeName;
      if (!result[nodeName]) {
        result[nodeName] = xmlToJson(node);
      } else {
        if (!Array.isArray(result[nodeName])) {
          result[nodeName] = [result[nodeName]]; 
        }
        result[nodeName].push(xmlToJson(node));
      } 
    });
  }

  if (xml.nodeType === Node.TEXT_NODE) {
    result = xml.nodeValue;
  }
  return result;
}

export {
  fetchXML,
  xmlToJson
};