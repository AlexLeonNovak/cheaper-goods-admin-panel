import { BaseEntity } from './base.interface';

export interface ICategoryResponse extends BaseEntity {
  rootCategory?: ICategoryResponse;
  subcategories?: ICategoryResponse[];
  name: string;
  description?: string;
  status: CategoryStatus;
}

export enum CategoryStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

export interface ICategoryCreate {
  name: string;
  description?: string;
  root?: number;
  status?: CategoryStatus;
}

export interface ICategoryUpdate extends ICategoryCreate {
  id: number;
}
