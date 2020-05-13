import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import * as fromContainers from './containers';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    SharedModule,
  ],
})
export class NetworkModule {}
