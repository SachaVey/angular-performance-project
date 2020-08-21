import { ApiService } from './../core/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Station } from '../models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
})
export class StationComponent implements OnInit {

  bundesland;
  stations: { bundesland: string, values: Station[] }[] = new Array();
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getAll<Station[]>().subscribe(result => {
      this.groupValuesByBundesland(result);
    });
  }

  private groupValuesByBundesland(result: Station[]) {
    this.bundesland = new Set(result.map(item => item.bundesland));
    this.bundesland.forEach(bundesland => {
      this.stations.push({
        bundesland,
        values: result.filter(i => i.bundesland === bundesland)
      });
    });
  }

  showDetails(values: Station[]) {
    
  }

}
