import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../_nav';
import { Badge } from 'primereact/badge';
import classNames from 'classnames';

export const AppSidebarNav = ({ items }: { items: NavItem[] }) => {
  // const location = useLocation();
  const navLink = ({ name, icon, badge }: NavItem) => {
    return (
      <>
        {icon && <span className="menu-item-icon">{icon}</span>}
        {name && <span className="menu-item-name">{name}</span>}
        {badge && <Badge severity={badge.color} value={badge.text} className="ms-auto" />}
      </>
    );
  };

  const navItem = (item: NavItem, index: React.Key) => {
    return (
      <li key={index} role="none" className={classNames('menu-item', item.to ? 'menu-item-link' : 'menu-item-title')}>
        {item.to ? <NavLink to={item.to}>{navLink(item)}</NavLink> : navLink(item)}
      </li>
    );
  };

  return (
    <ul role="menu" className="menu">
      {items && items.map((item, index) => navItem(item, index))}
    </ul>
  );
};
