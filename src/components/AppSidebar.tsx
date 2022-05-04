import React from 'react';

import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';

import { AppSidebarNav } from './AppSidebarNav';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';
import { RouteList } from '../common/enums/routes.enum';
import { NavLink } from 'react-router-dom';

const AppSidebar = () => {
  // const unfoldable = useSelector(state => state.sidebarUnfoldable);

  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={true}
      // onVisibleChange={visible => {
      //   dispatch({ type: 'set', sidebarShow: visible });
      // }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <NavLink to={RouteList.DASHBOARD} className="nav-title">
          Cheaper goods
        </NavLink>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
