import { FederalState } from '../../models/federal-state.model';
import { StateActions, StateActionTypes } from '../actions/state.actions';

export interface State {
  states: FederalState[];
  loading: boolean;
}

export const initialState: State = {
  states: [],
  loading: false
};

export function reducer(state = initialState, action: StateActions): State {
  switch (action.type) {

    case StateActionTypes.LoadFederalStates: {
      return {
        ...state,
        loading: true
      };
    }

    case StateActionTypes.LoadFederalStatesSuccess: {
      return {
        ...state,
        states: action.payload.states,
        loading: false
      };
    }
    default:
      return state;
  }
}
