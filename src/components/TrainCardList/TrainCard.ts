import { TrainService } from "../../types";

const lastReport = ({ station1, time }: { station1: string; time: string }) =>
  time ? `${station1} at ${time}` : "No Report";

const TrainCard = (data: TrainService) => `
  <div class="train__card">
    <div><strong>Platform:</strong> ${data.Platform.Number}</div>
    <div><strong>From:</strong> ${data.Origin1.name}</div>
    <div><strong.Scheduled Origin Departure Time:</strong> ${data.DepartTime.time}</div>
    <div><strong>Expected Depart Time:</strong> ${data.ExpectedDepartTime.time}</div>
    <div><strong>To:</strong> ${data.Destination1.name}</div>
    <div><strong>Scheduled Destination Arrive Time:</strong> ${data.ArriveTime.time}</div>
    <div><strong>Expected Arrive Time:</strong> ${data.ExpectedArriveTime.time}</div>
    <div><strong>Delay:</strong> ${data.Delay.Minutes}</div>
    <div><strong>Last Report:</strong> ${lastReport(data.LastReport)}</div>
  </div>
`;

export default TrainCard;
