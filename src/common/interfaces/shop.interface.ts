import { IBaseEntity, IBaseInfo } from './base.interface';

export interface IShop extends IBaseInfo {
  addressIds: number[];
}

export interface IShopAddress {
  address: string;
  latitude: number;
  longitude: number;
}

export interface IShopAddressResponse extends IShopAddress, IBaseEntity {}

export interface IShopResponse extends IBaseEntity, IBaseInfo {
  addresses: IShopAddressResponse[];
}
