import axios, { AxiosRequestConfig } from 'axios';
import { storage } from '../utils/storage';

export const BASE_URL = `${process.env.REACT_APP_API_URL}/api/v1`;

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = storage.token.get();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// export const handleError = (error: AxiosError<IResponseError>) => {
//   const responseError: ResponseError = {
//     code: error.response?.status || 500,
//     status: 'fail',
//     type: 'RequestError',
//     message: error.message,
//   };
//   switch (error.response?.status) {
//     case 400:
//       responseError.type = 'BadRequestError';
//       responseError.status = 'error';
//       responseError.message = error.response?.data.error;
//       break;
//     case 422:
//       responseError.type = 'ValidationError';
//       responseError.status = 'error';
//       responseError.message = 'Some of the fields have invalid values. Please correct and try again';
//       responseError.details = error.response?.data.messages;
//       break;
//   }
//
//   return responseError;
// };

export default $api;
