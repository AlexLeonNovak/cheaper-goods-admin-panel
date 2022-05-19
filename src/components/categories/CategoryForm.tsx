import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixed, number, object, SchemaOf, string } from 'yup';
import { CategoryStatus, ICategoryCreate } from '../../common/interfaces/category.interface';
import { useCategories } from '../../hooks/categories/useCategories';
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { TreeSelect, TreeSelectSelectionKeys } from 'primereact/treeselect';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { DefaultValues } from 'react-hook-form/dist/types/form';
import { ResponseError } from '../../common/interfaces/errors';

const schema: SchemaOf<ICategoryCreate> = object().shape({
  name: string().required().defined(),
  description: string().optional(),
  root: number().optional(),
  status: mixed<CategoryStatus>().oneOf(Object.values(CategoryStatus)).optional(),
});

interface Props {
  defaultValues?: DefaultValues<ICategoryCreate>;
  onFormSubmit: (data: ICategoryCreate) => void;
  apiErrors?: ResponseError | null;
  isFetching?: boolean;
  btnSubmitLabel?: string;
  currentId?: number;
}

export const CategoryForm = ({
  defaultValues = { status: CategoryStatus.ACTIVE },
  onFormSubmit,
  apiErrors,
  isFetching,
  btnSubmitLabel = 'Create',
  currentId,
}: Props) => {
  const { categories, isCategoriesLoading } = useCategories(currentId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm<ICategoryCreate>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <form className="p-fluid" onSubmit={handleSubmit(onFormSubmit)}>
      <div className="field grid">
        <label htmlFor="inputName" className="col-12 mb-2 md:col-2 md:mb-0">
          Name
        </label>
        <div className="col-12 md:col-10">
          <InputText id="inputName" {...register('name')} />
          {apiErrors?.code === 422 && <small className="p-error">{apiErrors.details?.name}</small>}
          {errors.name && <small className="p-error">{errors.name.message}</small>}
        </div>
      </div>

      <div className="field grid">
        <label htmlFor="inputDescription" className="col-12 mb-2 md:col-2 md:mb-0">
          Description
        </label>
        <div className="col-12 md:col-10">
          <InputTextarea id="inputDescription" {...register('description')} />
        </div>
      </div>

      <div className="field grid">
        <label htmlFor="inputRoots" className="col-12 mb-2 md:col-2 md:mb-0">
          Root categories
        </label>
        <div className="col-12 md:col-10">
          <Controller
            name="root"
            control={control}
            render={({ field }) => (
              <TreeSelect
                {...field}
                value={field.value as TreeSelectSelectionKeys}
                options={categories}
                metaKeySelection={false}
                display="comma"
                selectionMode="single"
                placeholder="Choose category"
              />
            )}
          />
        </div>
      </div>

      <div className="field grid">
        <label htmlFor="inputStatus" className="col-12 mb-2 md:col-2 md:mb-0">
          Status
        </label>
        <div className="col-12 md:col-10">
          <Dropdown
            id="inputStatus"
            {...register('status')}
            value={getValues('status')}
            options={[
              { label: 'Active', value: CategoryStatus.ACTIVE },
              { label: 'Inactive', value: CategoryStatus.INACTIVE },
              { label: 'Deleted', value: CategoryStatus.DELETED },
            ]}
          />
        </div>
      </div>

      <div className="row">
        <div className="offset-sm-2 col-2">
          <Button type="submit" color="primary" loading={isFetching || isCategoriesLoading} label={btnSubmitLabel} />
        </div>
      </div>
    </form>
  );
};
