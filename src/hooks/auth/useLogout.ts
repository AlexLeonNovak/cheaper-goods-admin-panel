import { useMutation } from 'react-query';
import $api from '../../common/config/api';
import { useAuth } from './useAuth';

const logout = async () => {
  await $api.post('/auth/logout');
};

export const useLogout = () => {
  const { setAuthData } = useAuth();
  const { mutateAsync } = useMutation(logout, {
    onSettled: () => {
      setAuthData(null);
    },
  });
  return {
    logout: mutateAsync,
  };
};
