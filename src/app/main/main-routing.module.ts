import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
// import * as fromNetworkContainers from './network/containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./network/network.module').then((m) => m.NetworkModule),
      },
      // without module
      // { path: '', component: fromNetworkContainers.NetworkListComponent },
      // { path: ':id', component: fromNetworkContainers.NetworkDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
