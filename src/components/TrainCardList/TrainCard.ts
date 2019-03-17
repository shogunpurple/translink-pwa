import { TrainService } from "../../types";

const lastReport = ({ station1, time }: { station1: string; time: string }) =>
  time ? `${station1} at ${time}` : "No Report";

const TrainCard = (data: TrainService) => `
  <div class="train__card">
    <div>Platform: ${data.Platform.Number}</div>
    <div>From: ${data.Origin1.name}</div>
    <div>Scheduled Origin Departure Time: ${data.DepartTime.time}</div>
    <div>Expected Depart Time: ${data.ExpectedDepartTime.time}</div>
    <div>To: ${data.Destination1.name}</div>
    <div>Scheduled Destination Arrive Time: ${data.ArriveTime.time}</div>
    <div>Expected Arrive Time: ${data.ExpectedArriveTime.time}</div>
    <div>Delay: ${data.Delay.Minutes}</div>
    <div>Last Report: ${lastReport(data.LastReport)}</div>
  </div>
`;

export default TrainCard;
