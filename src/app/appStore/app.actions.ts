export class GetNetworks {
  static readonly type = '[GetNetworks] Getting networks';
}

export class GetNetworkDetails {
  static readonly type = '[GetNetworkDetails] Getting network details';
  constructor(public payload: string) { }
}
