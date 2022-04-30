import axios from 'axios';
import { BASE_URL } from '../../common/config/api';
import { IResponse } from '../../common/interfaces/response.interface';
import { AuthResponse } from '../../common/interfaces/user.interface';
// import { setToken } from '../../common/services/token.service';
import { useMutation } from 'react-query';

const refreshRequest = async (): Promise<IResponse<AuthResponse>> => {
  const res = await axios.post(`${BASE_URL}/refresh`);
  return res.data;
};

export const useRefresh = () => {
  const { mutateAsync } = useMutation(refreshRequest, {
    // onSuccess: data => setToken(data.result.accessToken),
  });
  return {
    refreshToken: mutateAsync,
  };
};
