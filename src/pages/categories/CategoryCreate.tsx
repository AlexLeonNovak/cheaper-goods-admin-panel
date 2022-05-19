import { CategoryForm } from '../../components/categories/CategoryForm';
import { Card } from 'primereact/card';
import { useCategoryCreate } from '../../hooks/categories/useCategoryCreate';
import { Navigate } from 'react-router-dom';
import { RouteList } from '../../common/enums/routes.enum';
import React from 'react';
import { CategoriesHeader } from '../../components/categories/CategoriesHeader';

const CategoryCreate = () => {
  const { onCreateCategory, isCreateCategorySuccess, isCreatingCategory, createCategoryErrors } = useCategoryCreate();

  if (isCreateCategorySuccess) {
    return <Navigate to={RouteList.CATEGORIES} />;
  }

  return (
    <Card>
      <CategoriesHeader title="Create new category" />
      <CategoryForm onFormSubmit={onCreateCategory} apiErrors={createCategoryErrors} isFetching={isCreatingCategory} />
    </Card>
  );
};

export default CategoryCreate;
