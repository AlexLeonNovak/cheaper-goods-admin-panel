import $api from '../../common/config/api';
import { useQuery } from 'react-query';
import { CategoryStatus, ICategoryResponse } from '../../common/interfaces/category.interface';
import TreeNode from 'primereact/treenode';
import { selectShowDeleted } from '../../store/categorySettings';
import { useSelector } from 'react-redux';

const fetchCategories = async (): Promise<ICategoryResponse[]> => await $api.get('/categories');

const toTreeOptions = (categories?: ICategoryResponse[], currentId?: number, withDeleted = false): TreeNode[] => {
  if (!categories) {
    return [];
  }
  const roots = categories.filter(({ rootCategory }) => !rootCategory);
  const subs = (cats: ICategoryResponse[]) =>
    cats
      .filter(cat => !(!withDeleted && cat.status === CategoryStatus.DELETED))
      .map(cat => {
        const node: TreeNode = {
          key: cat.id,
          label: cat.name,
          data: cat,
          className: cat.status === CategoryStatus.DELETED ? 'bg-red-100' : '',
        };
        if (currentId && currentId === cat.id) {
          node.selectable = false;
          node.className = 'bg-gray-300';
        }
        if (cat.subcategories?.length) {
          const subIds = cat.subcategories.map(cat => cat.id);
          const sub = categories.filter(cat => subIds.includes(cat.id));
          node.children = subs(sub);
        }
        return node;
      });
  return subs(roots);
};

export const useCategories = (currentId?: number) => {
  const withDeleted = useSelector(selectShowDeleted);
  const { data, isLoading, isFetched } = useQuery<ICategoryResponse[]>('/categories', fetchCategories);

  return {
    categories: toTreeOptions(data, currentId, withDeleted),
    isCategoriesLoading: isLoading,
    isCategoriesLoaded: isFetched,
  };
};
