import { State } from '../reducers/state.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromState from '../reducers/state.reducer';

export const getLandState = createFeatureSelector<State>('state');

export const getStatesLoading = createSelector(
  getLandState,
  state => state.loading
);

export const getAllStates = createSelector(
  getLandState,
  state => state.states
);