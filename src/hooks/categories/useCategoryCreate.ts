import { useMutation } from 'react-query';
import { ICategoryResponse, ICategoryCreate } from '../../common/interfaces/category.interface';
import $api from '../../common/config/api';
import { ResponseError } from '../../common/interfaces/errors';
import { toast } from '../../common/utils/toast';

const createCategory = (data: ICategoryCreate): Promise<ICategoryResponse> => $api.post('/categories', data);

export const useCategoryCreate = () => {
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation<
    ICategoryResponse,
    ResponseError,
    ICategoryCreate
  >(createCategory, {
    onSuccess: () => toast.success('Category created'),
  });

  return {
    onCreateCategory: mutateAsync,
    createCategoryErrors: error,
    isCreatingCategory: isLoading,
    isCreateCategorySuccess: isSuccess,
    isCreateCategoryError: isError,
  };
};
