import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { FederalState } from 'src/app/models/models';

export enum StateActionTypes {
  LoadFederalStates = '[State] Load States',
  LoadFederalStatesSuccess = '[State] Load States Success',
  LoadFederalStatesFailure = '[State] Load States Failure'
}

export class LoadFederalStates implements Action {
  readonly type = StateActionTypes.LoadFederalStates;
}

export class LoadFederalStatesSuccess implements Action {
  readonly type = StateActionTypes.LoadFederalStatesSuccess;
  constructor(public payload: { states: FederalState[] }) { }
}

export class LoadFederalStatesFailure implements Action {
  readonly type = StateActionTypes.LoadFederalStatesFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export type StateActions =
  | LoadFederalStates
  | LoadFederalStatesSuccess
  | LoadFederalStatesFailure;
