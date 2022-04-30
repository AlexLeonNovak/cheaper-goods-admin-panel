import { useMutation } from 'react-query';
import { AuthResponse, LoginRequest } from '../../common/interfaces/user.interface';
import { IResponse } from '../../common/interfaces/response.interface';
import { storage } from '../../common/utils/storage';
import { ResponseError } from '../../common/interfaces/errors';
import $api from '../../common/config/api';
import { AxiosError } from 'axios';

const login = async (credentials: LoginRequest): Promise<IResponse<AuthResponse>> => {
  const res = await $api.post('/auth/login', credentials);
  return res.data;
};

export const useLogin = () => {
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation<
    IResponse<AuthResponse>,
    AxiosError<ResponseError>,
    LoginRequest
  >(login, {
    onSuccess: data => {
      storage.token.set(data.result.accessToken);
      storage.user.set(data.result.user);
    },
  });
  // console.log(error?.response);
  const isFail = isError && (!error?.response?.data || error.response.data.status === 'fail');
  return {
    login: mutateAsync,
    isLoginLoading: isLoading,
    isSuccessLogin: isSuccess,
    error,
    // error: isFail ? error : error?.response?.data,
    isError,
    isFail,
  };
};
