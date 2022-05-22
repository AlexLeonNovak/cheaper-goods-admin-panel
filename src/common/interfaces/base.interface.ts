export interface IBaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBaseInfo {
  name: string;
  description?: string;
}
