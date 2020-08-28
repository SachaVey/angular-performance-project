import { getAllStates } from './../states/selectors/state.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FederalState } from '../models/models';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { State } from '../states/reducers/state.reducer';
import { LoadFederalStates } from '../states/actions/state.actions';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
})
export class StationComponent implements OnInit {

  states$: Observable<FederalState[]>;
  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.states$ = this.store.pipe(select(getAllStates));
    this.store.dispatch(new LoadFederalStates());
  }

  showDetails(stateName: string): void {
    this.router.navigate(['/station-details', { state: stateName }]);
  }

}
