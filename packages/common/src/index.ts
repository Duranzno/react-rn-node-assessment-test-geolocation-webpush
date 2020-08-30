export type LatLng = {
  latitude: number;
  longitude: number;
};
export type Point = {
  x: number;
  y: number;
};
export type Score = {
  question:string,
  answer:string,
}
export interface SosafeData {
  name: string;
  filters: string[];
  scores: Score[];
  location: LatLng;
}
export const SosafeDataTemplate: SosafeData= {
  name: "First Piece of Data Sent",
  filters: ["A"],
  scores:[{answer:"Good",question:"A"}],
  location:{
    latitude: 52.5200066, longitude: 13.404954
  }
}
export const pusherConfig = {
  appId: '1063660',
  key: '605ff04b821c4a21d109',
  secret: '574d241f013461101120',
  cluster: 'us2',
  channel: 'sosafe-data-channel',
  event: 'sosafe-data-event',
};
