import { BASE_URL } from '../../common/config/api';
import { IResponse } from '../../common/interfaces/response.interface';
import { AuthResponse } from '../../common/interfaces/user.interface';
import { useQuery } from 'react-query';
import { useAuth } from './useAuth';
import axios from 'axios';
import { useEffect, useRef } from 'react';

const refreshRequest = async (): Promise<IResponse<AuthResponse>> => {
  const res = await axios.get(`${BASE_URL}/auth/refresh`, {
    withCredentials: true,
  });
  return res.data;
};

export const useRefresh = () => {
  const { isAuthenticated, setAuthData } = useAuth();
  const prevAuth = useRef<boolean>();

  useEffect(() => {
    prevAuth.current = isAuthenticated;
  }, [isAuthenticated]);

  console.log(prevAuth);
  const { isLoading, refetch } = useQuery({
    enabled: isAuthenticated && prevAuth.current === isAuthenticated,
    queryFn: refreshRequest,
    onSettled: data => setAuthData(data?.result || null),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    refreshToken: refetch,
    isLoading,
  };
};
