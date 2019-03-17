import TrainCard from "./TrainCard";
import { StationBoard, TrainService } from "../../types";

const TrainCardList = {
  template: (props: StationBoard) => {
    // TODO: is this still required?
    const services: [TrainService] = Array.isArray(props.Service)
      ? props.Service
      : [props.Service];

    return `
      <div class="train__cardlist">
        <h2>${props.name} - Last Updated: ${props.Timestamp}</h2>
        ${services.map(TrainCard).join("")} 
      </div>
    `;
  },
  render: function(props: StationBoard) {
    document.querySelector(".app__container").innerHTML = this.template(props);
  }
};

export default TrainCardList;
