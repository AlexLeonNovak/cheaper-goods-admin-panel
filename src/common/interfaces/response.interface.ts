import { ResponseStatus } from '../types/response.type';

export interface IResponse<T> {
  code: number;
  status: ResponseStatus;
  result: T;
}

export interface IResponseError {
  code: number;
  error: string;
  messages: string | string[] | Record<string, any>;
  status: ResponseStatus;
}
