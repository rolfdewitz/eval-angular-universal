import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  { path: '', component: fromContainers.NetworkListComponent },
  { path: ':id', component: fromContainers.NetworkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkRoutingModule {}
