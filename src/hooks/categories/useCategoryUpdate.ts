import { useMutation } from 'react-query';
import { ICategoryResponse, ICategoryUpdate } from '../../common/interfaces/category.interface';
import $api from '../../common/config/api';
import { ResponseError } from '../../common/interfaces/errors';
import { toast } from '../../common/utils/toast';

const updateCategory = (data: ICategoryUpdate): Promise<ICategoryResponse> =>
  $api.patch(`/categories/${data.id}`, data);

export const useCategoryUpdate = () => {
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation<
    ICategoryResponse,
    ResponseError,
    ICategoryUpdate
  >('/categories', updateCategory, {
    onSuccess: () => toast.success('Category updated'),
  });
  return {
    onUpdateCategory: mutateAsync,
    updateCategoryErrors: error,
    isUpdatingCategory: isLoading,
    isUpdateCategorySuccess: isSuccess,
    isUpdateCategoryError: isError,
  };
};
