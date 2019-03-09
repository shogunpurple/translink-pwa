type YesOrNo = 'Yes' | 'No'
type TimeStatus  = 'On time' | 'Delayed'

export interface Station {
  name: string
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
} 

export interface TrainTimeTable {
  Service: [TrainService]
}
