import React from 'react';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';
import AppBreadcrumb from '../components/AppBreadcrumb';
import AppContent from '../components/AppContent';

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <div className="container-fluid">
            <div className="mb-2">
              <AppBreadcrumb />
            </div>
            <AppContent />
          </div>
        </div>
        {/*<AppFooter />*/}
      </div>
    </div>
  );
};

export default DefaultLayout;
