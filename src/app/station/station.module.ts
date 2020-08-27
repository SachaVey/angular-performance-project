import { StateEffects } from './../states/effects/state.effects';
import { StationDetailsComponent } from './station-details/station-details.component';
import { StationComponent } from './station.component';
import { StationRoutingModule } from './station-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBook from '../states/reducers/state.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationRoutingModule,
    StoreModule.forFeature('state', fromBook.reducer),
    EffectsModule.forFeature([StateEffects])

  ],
  declarations: [StationComponent]
})
export class StationModule {}
