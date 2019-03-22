import { fetchTrainTimes } from './services/translinkApiService';
import StationAutocomplete from './components/StationAutocomplete'; 
import TrainCardList from './components/TrainCardList';
import './styles/index.css';

// Elements
const backButton: HTMLElement = document.querySelector('.backbutton');
const offlineIndicator: HTMLElement = document.querySelector('.offline__indicator');

// Event Listeners
document.body.addEventListener('keyup', evt => {
  const target = <HTMLElement> evt.target;
  if (!target.matches('.autocomplete__input')) return;
  StationAutocomplete.renderOptions();
});

document.body.addEventListener('click', evt => {
  const target = <HTMLElement> evt.target;
  if (!target.matches('.autocomplete__item')) return;
  const station = target.textContent;
  localStorage.setItem('station', station);
  renderTrainCardList(station);
});

window.addEventListener('load', function checkOnlineStatus() {
  function updateOnlineStatus() {
    offlineIndicator.style.display = navigator.onLine ? 'none' : 'block';
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
});

backButton.addEventListener('click', () => StationAutocomplete.render());


// Initial Rendering Code 
function renderApp(): void {
  const station = localStorage.getItem('station');
  if (station) {
    renderTrainCardList(station);
    return;
  }
  StationAutocomplete.render();
}

// TODO: Refactor to something a little cleaner 
function renderTrainCardList(station: string) {
  fetchTrainTimes(station, true).then(data => TrainCardList.render(data.StationBoard));
  fetchTrainTimes(station).then(data => TrainCardList.render(data.StationBoard));
}

renderApp();

// ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(e => console.error('Error registering Service Worker', e));
}