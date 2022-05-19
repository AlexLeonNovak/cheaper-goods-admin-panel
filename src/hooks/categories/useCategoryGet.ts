import $api from '../../common/config/api';
import { useQuery } from 'react-query';
import { ICategoryResponse } from '../../common/interfaces/category.interface';

const fetchCategory = async (id?: number): Promise<ICategoryResponse> =>
  id === undefined ? Promise.reject(new Error('Id is not defined')) : await $api.get(`/categories/${id}`);

export const useCategoryGet = (categoryId?: number) => {
  const { data: category, isLoading } = useQuery<ICategoryResponse>(
    ['/categories', categoryId],
    () => fetchCategory(categoryId),
    {
      enabled: categoryId !== undefined,
    },
  );

  return {
    category,
    isCategoryLoading: isLoading,
  };
};
