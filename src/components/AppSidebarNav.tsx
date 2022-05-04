import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CBadge } from '@coreui/react';
import { NavItem } from '../_nav';

export const AppSidebarNav = ({ items }: { items: NavItem[] }) => {
  const location = useLocation();
  const navLink = ({ name, icon, badge }: NavItem) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item: NavItem, index: React.Key | null | undefined) => {
    const { component, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(item)}
      </Component>
    );
  };
  const navGroup = (item: NavItem, index: React.Key | null | undefined) => {
    const { component, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(item)}
        visible={to && location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  );
};
