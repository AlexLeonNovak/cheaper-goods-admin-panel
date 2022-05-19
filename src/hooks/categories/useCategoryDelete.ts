import $api from '../../common/config/api';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from '../../common/utils/toast';

const deleteCategory = async (id: number): Promise<void> => await $api.delete(`/categories/${id}`);

export const useCategoryDelete = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isSuccess } = useMutation('/categories', deleteCategory, {
    onSuccess: () => {
      toast.success('Category deleted');
      queryClient.invalidateQueries('/categories');
    },
  });

  return {
    deleteCategory: mutateAsync,
    isCategoryDeleting: isLoading,
    isCategoryDeleted: isSuccess,
  };
};
