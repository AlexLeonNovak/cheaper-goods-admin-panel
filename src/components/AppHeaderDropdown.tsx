import React, { useRef } from 'react';

import { useLogout } from '../hooks/auth/useLogout';
import { MenuItem } from 'primereact/menuitem';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useAuth } from '../hooks/auth/useAuth';

const AppHeaderDropdown = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  const menu = useRef<Menu>(null);
  const items: MenuItem[] = [
    {
      label: `${user?.firstName} ${user?.lastName}`.trim(),
      items: [
        {
          label: 'Logout',
          icon: PrimeIcons.SIGN_OUT,
          command: () => logout(),
        },
      ],
    },
  ];
  return (
    <>
      <Menu model={items} popup ref={menu} />
      <Button className="p-link btn-header" onClick={e => menu?.current?.toggle(e)}>
        <i className={PrimeIcons.USER} />
      </Button>
    </>
  );
};

export default AppHeaderDropdown;
