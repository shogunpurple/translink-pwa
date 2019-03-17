const xmlService = require('../xmlService');

const TRANSLINK_REALTIME_URL = 'https://apis.opendatani.gov.uk/translink';

const fetchTrainTimes = async (req, res) => {
  const { stationCode } = req.params;
  const url = `${TRANSLINK_REALTIME_URL}/${stationCode}.xml`;
  await xmlService.fetchXML(url, (err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
};

module.exports = {
  fetchTrainTimes
};