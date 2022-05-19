import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { RouteList } from '../../common/enums/routes.enum';
import { CategoriesList } from '../../components/categories/CategoriesList';
import { CategoriesHeader } from '../../components/categories/CategoriesHeader';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CategoriesHeader title="Categories">
        <Button
          className="p-button-success mr-4"
          onClick={() => navigate(RouteList.CATEGORY_CREATE)}
          label="Create new category"
        />
      </CategoriesHeader>
      <CategoriesList />
    </Card>
  );
};

export default Categories;
