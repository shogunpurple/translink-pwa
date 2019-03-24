import { TrainService, LastReport } from "../../types";
import { TERMINATING } from "../../constants";

const lastReport = ({ station1, time }: LastReport) => time ? `${station1} at ${time}` : "No Report";

const TrainCardField = ({ value, title }: { value: string, title: string }) => value ? `
  <div class="train-card__field">
    <strong>${title}</strong> 
    ${value}
  </div>
` : '';

const TrainCard = (data: TrainService & { stationName: string }) => `
  <div class="train-card">
    <div class="from-origin">
      ${data.Origin1.name} / ${data.Destination1.name === TERMINATING ? data.stationName : data.Destination1.name}
    </div>
    <div class="train-card__platform">PLATFORM ${data.Platform.Number}</div>
    <hr>
    ${TrainCardField({ value: data.ArriveTime.time, title: `Scheduled Arrival Time (${data.stationName})` })}
    ${TrainCardField({ value: data.ExpectedArriveTime.time, title: 'Arrival Status' })}

    ${TrainCardField({ value: data.DepartTime.time, title: `Scheduled Departure Time (${data.stationName})` })}
    ${TrainCardField({ value: data.ExpectedDepartTime.time, title: 'Departure Status' })}

    ${TrainCardField({ value: data.Delay.Minutes, title: 'Delay' })}

    ${TrainCardField({ value: lastReport(data.LastReport), title: 'Last Reported At' })}
  </div>
`;

export default TrainCard;
