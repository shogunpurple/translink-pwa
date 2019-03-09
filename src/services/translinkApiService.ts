import { STATION_CODES } from '../constants';
import { fetchXML, xmlToJson } from './xmlService';

const TRANSLINK_REALTIME_URL = 'https://apis.opendatani.gov.uk/translink';

const fetchTrainTimes = async (destination: string) => {
  const stationCode = STATION_CODES[destination];
  const xml = await fetchXML(`${TRANSLINK_REALTIME_URL}/${stationCode}.xml`);
  const journeys = xmlToJson(xml.childNodes[0]);
  console.log(journeys);
  return journeys;
};

export {
  fetchTrainTimes
};