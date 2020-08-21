import { Observable } from 'rxjs';
import { Station } from './../../models/station.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit {

  stations$: Observable<Station[]>;
  stateName: string;
  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.stateName = this.route.snapshot.paramMap.get('state');
    this.stations$ = this.apiservice.getAllStations<Station[]>(this.stateName).pipe(
      map((stations) => {
        stations.sort((a, b) => {
          return a.plz < b.plz ? -1 : 1;
        });
        return stations;
      })
    );
  }
}
