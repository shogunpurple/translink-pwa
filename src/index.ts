import { fetchTrainTimes } from './services/translinkApiService';
import StationAutocomplete from './components/StationAutocomplete'; 
import TrainCardList from './components/TrainCardList';
import { TrainTimeTable } from './types';

// Elements
const backButton = document.querySelector('.backbutton');

// Event Listeners
document.body.addEventListener('keyup', evt => {
  const target = evt.target as HTMLElement;
  if (!target.matches('.autocomplete__input')) return;
  StationAutocomplete.renderOptions();
});

document.body.addEventListener('click', evt => {
  const target = evt.target as HTMLElement;
  if (!target.matches('.autocomplete__item')) return;
  const station = target.textContent;
  localStorage.setItem('station', station);
  fetchTrainTimes(station).then(data => TrainCardList.render(data));
});

backButton.addEventListener('click', () => StationAutocomplete.render());

function renderApp() {
  const station = localStorage.getItem('station');
  if (station) {
    fetchTrainTimes(station).then(data => TrainCardList.render(data));
    return;
  }
  StationAutocomplete.render();
}

renderApp();

// ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}