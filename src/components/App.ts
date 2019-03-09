import TrainCard from './TrainCard';
import { TrainTimeTable } from '../types';

const App = (data: TrainTimeTable) => `
  <div class="app__container">
    ${data.Service.map((service) => TrainCard(service)).join('')}
  </div>
`;

export default App;
