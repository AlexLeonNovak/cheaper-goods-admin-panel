import { CategoriesSettings } from './CategoriesSettings';
import React from 'react';

interface Props {
  title: string;
  children?: JSX.Element;
}

export const CategoriesHeader = ({ title, children }: Props) => (
  <div className="flex mb-4">
    <div className="flex-fill">
      <h2 className="mb-4">{title}</h2>
    </div>
    <div className="flex-2 align-content-end">
      {children}
      <CategoriesSettings />
    </div>
  </div>
);
