import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../../appStore/app.store';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetNetworkDetails } from '../../../../appStore/app.actions';

// export interface Article {
//   id: number;
//   title: string;
//   userId: number;
//   body: string;
// }

@Component({
  selector: 'app-network-details',
  templateUrl: './network-details.component.html',
  styleUrls: ['./network-details.component.scss']
})
export class NetworkDetailsComponent implements OnInit {

  id: string;

  @Select(AppState.selectedNetwork) selectedNetwork$: Observable<any[]>;

  listItems: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.store.dispatch(new GetNetworkDetails(this.id));
    }
  }
}
