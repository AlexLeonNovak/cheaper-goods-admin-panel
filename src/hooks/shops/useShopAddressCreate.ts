import { useMutation } from 'react-query';
import $api from '../../common/config/api';
import { IShopAddress, IShopAddressResponse } from '../../common/interfaces/shop.interface';

const createAddress = async (data: IShopAddress): Promise<IShopAddressResponse> => await $api.post('', data);

export const useShopAddressCreate = () => {
  const { mutateAsync } = useMutation(createAddress);

  return {
    createShopAddress: mutateAsync,
  };
};
