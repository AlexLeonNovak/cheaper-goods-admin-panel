import { useMutation } from 'react-query';
import $api from '../../common/config/api';
import { IShop, IShopResponse } from '../../common/interfaces/shop.interface';

const createShop = async (data: IShop): Promise<IShopResponse> => await $api.post('/shops', data);

export const useShopCreate = () => {
  const { mutateAsync } = useMutation(createShop);
  return {
    shops: mutateAsync,
  };
};
