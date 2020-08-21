import { StationComponent } from './station.component';
import { StationRoutingModule } from './station-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationRoutingModule
  ],
  declarations: [StationComponent]
})
export class StationModule {}
