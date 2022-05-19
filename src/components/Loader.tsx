import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Loader: React.FC = () => (
  <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <ProgressSpinner strokeWidth="8" />
      </div>
    </div>
  </div>
);
