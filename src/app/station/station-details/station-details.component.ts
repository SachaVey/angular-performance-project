import { StationModalPage } from './../../shared/modals/stations/station.modal';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent, IonVirtualScroll, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Station } from './../../models/station.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  isSearchbarViewed = true;
  stations$: Observable<Station[]>;
  stateName: string;
  searchword: string;
  constructor(
    private route: ActivatedRoute,
    private apiservice: ApiService,
    private modalController: ModalController
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

  functionToTriggerOnScroll(e: any) {
    !this.isElementInViewport(document.getElementById('searchBar')) ? this.isSearchbarViewed = false : this.isSearchbarViewed = true;
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  backToSearchBar() {
    this.ionContent.scrollToTop();
  }

  openModal(station: Station) {
    this.presentModal(station);
  }

  async presentModal(station: Station) {
    const modal = await this.modalController.create({
      component: StationModalPage,
      componentProps: {
        station
      }
    });
    return await modal.present();
  }
}
