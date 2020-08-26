import { Station } from './../../../models/station.model';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-station-modal',
  templateUrl: './station.html',
  styleUrls: ['./station.scss'],
})
export class StationModalPage implements OnInit {

  @Input() station: Station;
  constructor(private modalController: ModalController) {

  }
  ngOnInit(): void {
    console.log(this.station);
  }


  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    await this.modalController.dismiss();
  }
}
