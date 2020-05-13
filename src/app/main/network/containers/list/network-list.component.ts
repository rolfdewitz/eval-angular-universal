import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../appStore/app.store';
import { GetNetworks } from '../../../../appStore/app.actions';

// export interface Article {
//   id: number;
//   title: string;
//   userId: number;
//   body: string;
// }

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.scss'],
})
export class NetworkListComponent implements OnInit {
  @Select(AppState.networks) networks$: Observable<any[]>;

  listItems: any[];

  constructor(readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetNetworks());
  }
}
