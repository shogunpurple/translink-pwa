import { STATION_CODES } from '../constants';
import { TrainTimeTable, Station } from '../types';

const TRANSLINK_REALTIME_URL = 'http://localhost:3000/translink';

const fetchTrainTimes = async (destination: string, cache?: boolean): Promise<TrainTimeTable> => {
  const stationCode = STATION_CODES.find((station: Station) => station.name === destination).code;
  const url = `${TRANSLINK_REALTIME_URL}/${stationCode}`;

  // fetch from the cache first
  if ('caches' in window && cache) {
    const cacheResponse = await caches.match(url);
    if (cacheResponse) return cacheResponse.json(); 
  }

  // or fetch from the network
  const response = await fetch(url);
  return await response.json();
};

export {
  fetchTrainTimes
};