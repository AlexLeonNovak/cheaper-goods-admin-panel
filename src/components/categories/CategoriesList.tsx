import { useCategories } from '../../hooks/categories/useCategories';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { ICategoryResponse } from '../../common/interfaces/category.interface';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { Toast } from 'primereact/toast';
import { useCategoryDelete } from '../../hooks/categories/useCategoryDelete';

export const CategoriesList = () => {
  const { categories, isCategoriesLoading, isCategoriesLoaded } = useCategories();
  const { deleteCategory, isCategoryDeleting, isCategoryDeleted } = useCategoryDelete();
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  if (isCategoriesLoading) {
    return <Spinner />;
  }

  if (isCategoryDeleted) {
    toast.current?.clear();
  }

  const showConfirm = (id: number) => {
    toast.current?.show({
      severity: 'warn',
      sticky: true,
      content: (
        <div className="flex-column">
          <div className="flex">
            <i className={PrimeIcons.EXCLAMATION_CIRCLE} style={{ fontSize: '3rem' }} />
            <h4 className="ml-4">Are you sure you want to delete this item?</h4>
          </div>
          <hr />
          <div className="grid p-fluid">
            <div className="col-6">
              <Button
                type="button"
                label="Yes"
                loading={isCategoryDeleting}
                onClick={() => deleteCategory(id)}
                className="p-button-danger"
              />
            </div>
            <div className="col-6">
              <Button type="button" label="No" onClick={() => toast.current?.clear()} className="p-button-secondary" />
            </div>
          </div>
        </div>
      ),
    });
  };

  const actionsTemplate = ({ data }: { data: ICategoryResponse }) => (
    <div>
      <Button
        type="button"
        className="p-button-secondary p-button-rounded p-button-outlined"
        icon={PrimeIcons.EYE}
        onClick={() => navigate(`${data.id}/view`)}
      />
      <Button
        type="button"
        className="p-button-rounded p-button-outlined ml-2"
        icon={PrimeIcons.PENCIL}
        onClick={() => navigate(`${data.id}/edit`)}
      />
      <Button
        type="button"
        className="p-button-rounded p-button-outlined p-button-danger ml-2"
        icon={PrimeIcons.TRASH}
        onClick={() => showConfirm(data.id)}
      />
    </div>
  );

  return (
    <>
      {isCategoriesLoaded && (
        <TreeTable value={categories}>
          <Column field="name" header="Category name" expander />
          <Column field="status" header="Status" />
          <Column body={actionsTemplate} />
        </TreeTable>
      )}
      <Toast ref={toast} position="center" />
    </>
  );
};
