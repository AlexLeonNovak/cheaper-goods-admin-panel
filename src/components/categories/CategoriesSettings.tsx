import { Menu } from 'primereact/menu';
import React, { useRef } from 'react';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { selectShowDeleted, toggleShowDeleted } from '../../store/categorySettings';
import { InputSwitch } from 'primereact/inputswitch';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';

export const CategoriesSettings = () => {
  const dispatch = useAppDispatch();
  const withDeleted = useSelector(selectShowDeleted);
  const menu = useRef<Menu>(null);
  const menuItems: MenuItem[] = [
    {
      label: 'Show deleted',
      template: () => (
        <div className="p-3 flex align-items-center">
          <InputSwitch
            id="toggleShowDeleted"
            className="p-inputswitch-sm mr-2"
            checked={withDeleted}
            onChange={() => dispatch(toggleShowDeleted())}
          />
          <label htmlFor="toggleShowDeleted">Show deleted categories</label>
        </div>
      ),
    },
  ];

  return (
    <>
      <Menu ref={menu} popup model={menuItems} style={{ width: 'auto' }} />
      <Button
        className="p-button-rounded p-button-secondary p-button-outlined"
        onClick={e => menu.current?.toggle(e)}
        aria-label="Category settings"
        icon={PrimeIcons.COG}
      />
    </>
  );
};
