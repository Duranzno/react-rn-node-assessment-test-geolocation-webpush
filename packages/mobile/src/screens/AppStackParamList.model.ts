// import { SosafeData } from "sosafe-assesment-test-shared-data";
export interface SosafeData {
  name: string;
  filters: string[];
  scores: number[];
  location: {
    latitude: number;
    longitude: number;
  };
}

export type AppStackParamList = {
  List: SosafeData[];
  Detail: SosafeData;
};
