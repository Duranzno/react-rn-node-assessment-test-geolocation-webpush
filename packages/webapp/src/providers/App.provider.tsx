import React, { useReducer } from 'react';

import createCtx from '../utils/createCtx';
import { SosafeData, Score, LatLng } from '@sosafe-test/common';

type State = SosafeData;

interface Context {
  state: State;
  addFilters: (filter: string[]) => void;
  addName: (name: string) => void;
  addScore: (Score: Score) => void;
  addMarker: (location: LatLng) => void;
}

const [useCtx, Provider] = createCtx<Context>();

export enum ActionType {
  addFilters = 'add-filter',
  addScore = 'add-score',
  addMarker = 'add-marker',
  addName = 'add-name',
}

const initialState: State = {
  ISOTime: '',
  filters: [],
  location: { latitude: 0, longitude: 0 },
  name: '',
  scores: [],
};

interface AddFiltersAction {
  payload: string[];
  type: ActionType.addFilters;
}
interface AddNameAction {
  payload: string;
  type: ActionType.addName;
}
interface AddScoreAction {
  payload: Score;
  type: ActionType.addScore;
}
interface AddMarkerAction {
  payload: LatLng;
  type: ActionType.addMarker;
}
type Action =
  | AddFiltersAction
  | AddNameAction
  | AddScoreAction
  | AddMarkerAction;

type Reducer = (state: State, action: Action) => State;

const addFilters = (dispatch: React.Dispatch<AddFiltersAction>) => (
  payload: string[],
): void => dispatch({ type: ActionType.addFilters, payload });

const addName = (dispatch: React.Dispatch<AddNameAction>) => (
  payload: string,
): void => dispatch({ type: ActionType.addName, payload });

const addScore = (dispatch: React.Dispatch<AddScoreAction>) => (
  payload: Score,
): void => dispatch({ type: ActionType.addScore, payload });

const addMarker = (dispatch: React.Dispatch<AddMarkerAction>) => (
  payload: LatLng,
): void => dispatch({ type: ActionType.addMarker, payload });

const mapToScore = (data: string): Score => ({
  question: data,
  answer: '',
});

const calcScore = (
  state: SosafeData,
  newScore: Score,
): SosafeData => {
  const scores = state.scores.map((curScore) =>
    curScore.question === newScore.question ? newScore : curScore,
  );
  return { ...state, scores };
};
const reducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.addFilters:
      return {
        ...state,
        filters: action.payload,
        scores: action.payload.map(mapToScore),
      };

    case ActionType.addMarker:
      return { ...state, location: action.payload };
    case ActionType.addName:
      return { ...state, name: action.payload };
    case ActionType.addScore:
      return calcScore(state, action.payload);
    default:
      return state;
  }
};

const AppProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer<Reducer>(
    reducer,
    initialState,
  );

  const actions = {
    addFilters: addFilters(dispatch),
    addName: addName(dispatch),
    addScore: addScore(dispatch),
    addMarker: addMarker(dispatch),
  };

  return (
    <Provider value={{ state, ...actions }}>
      {props.children}
    </Provider>
  );
};

export { useCtx as useAppContext, AppProvider };
