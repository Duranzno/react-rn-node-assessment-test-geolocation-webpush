import React, { useReducer } from 'react';

import { SosafeData } from 'common';
import createCtx from '../utils/createCtx';

interface Context {
  state: State;
  addMessage: (newMessage: SosafeData) => void;
}
const [useCtx, Provider] = createCtx<Context>();

export enum ActionType {
  addMessage = 'add-message',
}

export interface State {
  list: SosafeData[];
}

const initialState: State = {
  list: [],
};

interface AddMessageAction {
  type: ActionType.addMessage;
  payload: SosafeData;
}

type Action = AddMessageAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const addMessage = (dispatch: React.Dispatch<AddMessageAction>) => (
  payload: SosafeData,
): void => {
  dispatch({
    type: ActionType.addMessage,
    payload,
  });
};

const reducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'add-message':
      return { list: [...state.list, action.payload] };
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
    addMessage: addMessage(dispatch),
  };

  return (
    <Provider value={{ state, ...actions }}>
      {props.children}
    </Provider>
  );
};

export { useCtx as useAppContext, AppProvider };
