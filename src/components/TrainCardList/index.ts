import TrainCard from "./TrainCard";
import { StationBoard, TrainService } from "../../types";

const TrainCardList = {
  getServices: function(services: TrainService[] = []) {
    return Array.isArray(services) ? services : [services];
  },
  template: function(props: StationBoard) {
    return `
      <div class="train__cardlist">
        <h2>${props.name} - Last Updated: ${props.Timestamp}</h2>
        ${this
          .getServices(props.Service)
          .map(TrainCard).join("")} 
      </div>
    `;
  },
  render: function(props: StationBoard) {
    document.querySelector(".app__container").innerHTML = this.template(props);
  }
};

export default TrainCardList;
