import { IBaseEntity, IBaseInfo } from './base.interface';

export interface ICategoryResponse extends IBaseEntity, IBaseInfo {
  rootCategory?: ICategoryResponse;
  subcategories?: ICategoryResponse[];
  status: CategoryStatus;
}

export enum CategoryStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

export interface ICategoryCreate extends IBaseInfo {
  root?: number;
  status?: CategoryStatus;
}

export interface ICategoryUpdate extends ICategoryCreate {
  id: number;
}
