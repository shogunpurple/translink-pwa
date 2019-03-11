import TrainCard from './TrainCard';
import { TrainTimeTable, TrainService } from '../../types';

const TrainCardList = {
  template: (props: TrainTimeTable) => {

    const services: [TrainService] = Array.isArray(props.Service) ? props.Service : [props.Service];

    return `
      <div class="train__cardlist">
        ${services.map(TrainCard).join('')} 
      </div>
    `;
  },
  render: function(props) {
    document.querySelector('.app__container').innerHTML = this.template(props);
  }
};

export default TrainCardList;