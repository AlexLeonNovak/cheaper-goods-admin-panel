import { CategoryForm } from '../../components/categories/CategoryForm';
import { Card } from 'primereact/card';
import { Navigate, useParams } from 'react-router-dom';
import { useCategoryGet } from '../../hooks/categories/useCategoryGet';
import { useCategoryUpdate } from '../../hooks/categories/useCategoryUpdate';
import { ICategoryCreate } from '../../common/interfaces/category.interface';
import { Spinner } from '../../components/Spinner';
import React from 'react';
import { RouteList } from '../../common/enums/routes.enum';
import { CategoriesHeader } from '../../components/categories/CategoriesHeader';

const CategoryUpdate = () => {
  const { categoryId } = useParams();
  const { isCategoryLoading, category } = useCategoryGet(Number(categoryId));
  const { onUpdateCategory, updateCategoryErrors, isUpdatingCategory, isUpdateCategorySuccess } = useCategoryUpdate();

  const onUpdate = async (data: ICategoryCreate) => {
    await onUpdateCategory({ id: Number(categoryId), ...data });
  };

  if (isCategoryLoading) {
    return <Spinner />;
  }

  if (isUpdateCategorySuccess) {
    return <Navigate to={RouteList.CATEGORIES} />;
  }

  return (
    <Card>
      <CategoriesHeader title="Update category" />
      <CategoryForm
        defaultValues={{ ...category, root: category?.rootCategory?.id }}
        onFormSubmit={onUpdate}
        apiErrors={updateCategoryErrors}
        isFetching={isUpdatingCategory}
        btnSubmitLabel="Update"
        currentId={Number(categoryId)}
      />
    </Card>
  );
};

export default CategoryUpdate;
