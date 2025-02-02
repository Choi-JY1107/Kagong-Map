export type OpeningHour = {
    day: string
    startTime: string
    endTime: string
  }
  
  export type Cafe = {
    name: string
    address: string
    lat: number
    lon: number
    openNow: boolean | '정보 없음'
    openingHours?: OpeningHour[]
  }