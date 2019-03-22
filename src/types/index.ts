type YesOrNo = 'Yes' | 'No'
type TimeStatus  = 'On time' | 'Delayed'

export interface Station {
  name: string
  code: string
}

export interface CallingPoint {
  Name: string 
  crs: string 
  etarr: string 
  etdep: string 
  tiploc: string 
  ttarr: string 
  ttdep: string 
  type: string 
}

export interface TrainService {
  Origin1: {
    crs: string
    name: string 
    tiploc: string 
  }

  Destination1: {
    crs: string 
    etarr: string 
    name: string 
    tiploc: string 
    ttarr: string
  }

  ExpectedArriveStatus: {
    time: TimeStatus 
  }

  ExpectedArriveTime: {
    time: TimeStatus 
  }

  ExpectedDepartStatus: {
    time: TimeStatus 
  }

  ExpectedDepartTime: {
    time: TimeStatus 
  }

  Dest1CallingPoints: {
    CallingPoint: [CallingPoint]
  }

  ArriveTime: {
    Arrived: YesOrNo
    time: string
    timestamp: string
  }

  DepartTime: {
    time: YesOrNo
    timestamp: string
    sorttimestamp: string
  }

  Delay: {
    Minutes: string
  }

  DelayCause: {
    Minutes: string
  }

  Platform: {
    Number: string
    Changed: string
    Parent: string 
  }

  ServiceStatus: {
    Status: TimeStatus
  }

  LastReport: {
    station1: string 
    station2: string 
    time: string 
    tiploc: string 
    type: string 
  }
} 

export interface StationBoard {
  Timestamp: string
  name: string
  Service: [TrainService]
}

export interface TrainTimeTable {
  StationBoard: StationBoard;
}
