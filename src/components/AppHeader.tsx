import React from 'react';
import AppHeaderDropdown from './AppHeaderDropdown';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

// import { AppBreadcrumb } from './index'
// import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <div className="header mb-4">
      <div className="logo">Cheaper goods</div>
      <Button
        className="btn-header p-link"
        // onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
      >
        <i className={PrimeIcons.BARS} />
      </Button>
      <ul className="right-menu">
        <AppHeaderDropdown />
      </ul>
    </div>
  );
};

export default AppHeader;
