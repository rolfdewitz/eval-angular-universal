import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { SharedModule } from '../shared/shared.module';
import { FavouriteStationComponent } from './components/favourite-station/favourite-station.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    FavouriteStationComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
