import { LoadFederalStatesFailure } from './../actions/state.actions';
import { ApiService } from './../../core/api-service.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  StateActionTypes,
  LoadFederalStates,
  LoadFederalStatesSuccess,
  StateActions
} from '../actions/state.actions';
import { FederalState } from 'src/app/models/models';


@Injectable()
export class StateEffects {
  @Effect()
  loadStates$ = this.actions$.pipe(
    // ofType(StateActionTypes.LoadStates),
    // switchMap(() =>
    //   this.apiService.getAll().pipe(
    //     map((states: Land[]) => new LoadStatesSuccess({ states })),
    //     catchError(error => of(new LoadStatesFailure({ error }))))
    // )
    ofType(StateActionTypes.LoadFederalStates),
    mergeMap(() =>
      this.apiService.getAllFederalStates()
        .pipe(
          map((states: FederalState[]) => new LoadFederalStatesSuccess({ states })),
          catchError(error => of(new LoadFederalStatesFailure({ error }))))
    ))
  constructor(
    private actions$: Actions<StateActions>,
    private apiService: ApiService
  ) {
    console.log('effect');

  }

}
