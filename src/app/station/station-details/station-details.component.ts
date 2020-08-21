import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/models';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit {
  @Input() stations: Station[];
  constructor() { }

  ngOnInit() {}

}
