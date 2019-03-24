import TrainCard from "./TrainCard";
import StationAutocomplete from "../StationAutocomplete";
import { StationBoard, TrainService } from "../../types";
import './style.css';

const TrainCardList = {
  getServices: function(services: TrainService[] = []) {
    return Array.isArray(services) ? services : [services];
  },
  template: function(props: StationBoard) {
    return `
      <div class="train-cardlist">
        <button class="backbutton">Back</button> 
        <h1>${props.name}</h2>
        <h4>Last Updated</h4>
        <div>${props.Timestamp}</div>
        ${this
          .getServices(props.Service)
          .map((service: TrainService) => TrainCard({ ...service, stationName: props.name })).join("")} 
      </div>
    `;
  },
  render: function(props: StationBoard) {
    document.querySelector(".app__container").innerHTML = this.template(props);
    document.querySelector('.backbutton').addEventListener('click', () => StationAutocomplete.render());
  }
};

export default TrainCardList;
