import { fetchTrainTimes } from './services/translinkApiService';
import App from './components/App';
import { TrainTimeTable } from './types';

// Elements
const appContainer = document.querySelector('.app__container');

// Event Listeners

// Run Application 
function renderApp() {
  fetchTrainTimes('Bangor').then((data: TrainTimeTable) => {
    appContainer.innerHTML = App(data);
  });
}

renderApp();