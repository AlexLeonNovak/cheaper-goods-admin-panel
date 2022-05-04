import React from 'react';
import { CContainer, CRow, CSpinner } from '@coreui/react';

export const Loader: React.FC = () => (
  <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CSpinner color="info" variant="grow" />
      </CRow>
    </CContainer>
  </div>
);
