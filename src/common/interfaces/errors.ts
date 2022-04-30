import { ResponseStatus } from '../types/response.type';

export interface ResponseError {
  code: number;
  status: ResponseStatus;
  message: string;
  details: Record<string, string[]>; //ResponseErrorMessageType;
}
