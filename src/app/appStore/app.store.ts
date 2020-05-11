import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AppStateModel } from './app-state.model';
import { NetworkService } from '../main/services/network.service';
import { GetNetworks, GetNetworkDetails } from './app.actions';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    networks: [],
    selectedNetwork: null,
  }
})

@Injectable()
export class AppState {

  @Selector()
  static networks(state: AppStateModel): any[] | null {
    return state.networks;
  }

  @Selector()
  static selectedNetwork(state: AppStateModel): any | null {
    return state.selectedNetwork;
  }

  constructor(
    private store: Store,
    readonly service: NetworkService
  ) { }

  @Action(GetNetworks)
  getNetworks(ctx: StateContext<AppStateModel>, action: GetNetworks) {
    return this.service.getList().pipe(
      map((res: any) => {
        if (res && res.networks && res.networks.length > 0) {
          ctx.patchState({
            networks: res.networks
          });
          console.warn('GetNetworks #result', res.networks.length);
          return;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of(null);
      })
    );
  }

  @Action(GetNetworkDetails)
  getNetworkDetails(ctx: StateContext<AppStateModel>, action: GetNetworkDetails) {
    if (!action.payload) {
      return;
    }
    ctx.patchState({
      selectedNetwork: null
    });
    return this.service.getDetails(action.payload).pipe(
      map((res: any) => {
        if (res && res.network) {
          ctx.patchState({
            selectedNetwork: res.network
          });
          console.warn('GetNetworkDetails result', res.network);
          return;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        ctx.patchState({
          selectedNetwork: null
        });
        return of(null);
      })
    );
  }
}
