import { TrainService } from '../types';

const TrainCard = (data: TrainService) => `
  <div class="train__card">
    ${data.Destination1.name}
  </div>
`;

export default TrainCard;
