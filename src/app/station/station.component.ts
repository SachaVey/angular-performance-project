import { Observable } from 'rxjs';
import { State } from './../models/state.model';
import { ApiService } from './../core/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Station } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
})
export class StationComponent implements OnInit {

  states$: Observable<State[]>;
  stations: { stateValue: string, values: Station[] }[] = new Array();
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.states$ = this.apiService.getAllStates<State[]>();
  }

  showDetails(stateName: string): void {
    this.router.navigate(['/station-details', { state: stateName }]);
  }

}
