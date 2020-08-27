import { Station } from './../models/station.model';
import { ApiService } from './../core/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private menuController: MenuController,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe( val => {
      console.log(val);
    });
  }

  async openMenu() {
    await this.menuController.open();
  }

}
