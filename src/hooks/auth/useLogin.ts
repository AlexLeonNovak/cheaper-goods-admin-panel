import { useMutation } from 'react-query';
import { AuthResponse, ICredentials } from '../../common/interfaces/user.interface';
import { ResponseError } from '../../common/interfaces/errors';
import $api from '../../common/config/api';
import { useAuth } from './useAuth';

const login = async (credentials: ICredentials): Promise<AuthResponse> => {
  return await $api.post('/auth/login', credentials);
};

export const useLogin = () => {
  const { setAuthData } = useAuth();
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation<AuthResponse, ResponseError, ICredentials>(
    login,
    {
      onSuccess: data => setAuthData(data),
    },
  );

  return {
    login: mutateAsync,
    isLoginLoading: isLoading,
    isSuccessLogin: isSuccess,
    error,
    isError,
  };
};
