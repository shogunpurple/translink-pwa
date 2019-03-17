const fetch = require("node-fetch");
const xml2js = require("xml2js");
const XML_CONTENT_TYPE = "text/xml";

const parser = new xml2js.Parser({ mergeAttrs: true, explicitArray: false });

const fetchXML = async (url, callback) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": XML_CONTENT_TYPE
    }
  }).then(resp => resp.text());
  parser.parseString(response, callback);
};

module.exports = {
  fetchXML
};
