export class GetNetworks {
  static readonly type = '[GetNetworks] Getting networks';
}

export class GetNetworkDetails {
  static readonly type = '[GetNetworkDetails] Getting network details';
  constructor(public payload: string) {}
}

export class GetFavouriteNetworkStation {
  static readonly type =
    '[GetFavouriteNetworkStation] Getting favourite network station';
  constructor(public payload: any) {}
}
