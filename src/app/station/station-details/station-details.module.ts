import { StationDetailsRoutingModule } from './station-details-routing.module';
import { StationDetailsComponent } from './station-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StationFilterPipe } from 'src/app/shared/pipes/station-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationDetailsRoutingModule,
    ScrollingModule
    ],
  exports: [
    StationDetailsComponent
  ],
  declarations: [StationDetailsComponent, StationFilterPipe]
})
export class StationDetailsModule {}
