import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../appStore/app.store';
import { GetFavouriteNetworkStation } from '../../../appStore/app.actions';

@Component({
  selector: 'app-favourite-station',
  templateUrl: './favourite-station.component.html',
  styleUrls: ['./favourite-station.component.scss'],
})
export class FavouriteStationComponent implements OnInit {
  @Select(AppState.favouredNetworkStation) favouredNetworkStation$: Observable<
    any
  >;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      new GetFavouriteNetworkStation({
        networkId: 'onroll-el-campello',
        stationId: '2c1070f972885eff8b3df5db356dc10e',
      })
    );
  }
}
