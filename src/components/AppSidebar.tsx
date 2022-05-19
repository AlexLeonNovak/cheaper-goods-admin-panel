import React from 'react';
import { AppSidebarNav } from './AppSidebarNav';
import navigation from '../_nav';

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <AppSidebarNav items={navigation} />
    </div>
  );
};

export default React.memo(AppSidebar);
