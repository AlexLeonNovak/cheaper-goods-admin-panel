import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { storage } from '../utils/storage';
import { useRefresh } from '../../hooks/auth/useRefresh';
import { IResponse } from '../interfaces/response.interface';
import { toast } from '../utils/toast';
import { ResponseError } from '../interfaces/errors';

interface AxiosConfig extends AxiosRequestConfig {
  _isRetry: boolean;
}

const onResponseFulfilled = (config: AxiosResponse<IResponse<any>, ResponseError>) => {
  return config.data.result;
};

const onResponseRejected = async (error: AxiosError<ResponseError>) => {
  if (error.request.status === 0) {
    toast.error(error.message);
    throw error;
  }
  const originalConfig = error.config as AxiosConfig;
  if (error.request.status === 401 && !originalConfig._isRetry) {
    originalConfig._isRetry = true;
    const { refreshToken } = useRefresh();
    await refreshToken();
    return $api.request(originalConfig);
  }
  const data = error?.response?.data;
  data && toast.error(data.message);
  throw data;
};

const onRequestFulfilled = (config: AxiosRequestConfig) => {
  const token = storage.token.get();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const BASE_URL = `${process.env.REACT_APP_API_URL}/api/v1`;

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.request.use(onRequestFulfilled);
$api.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export default $api;
