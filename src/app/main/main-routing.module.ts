import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '', component: fromContainers.MainComponent,
    children: [
      {
        path: '', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule) 
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
