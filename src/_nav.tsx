import React, { ForwardRefExoticComponent } from 'react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons';
import { CNavItem, CNavTitle } from '@coreui/react';
import { RouteList } from './common/enums/routes.enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faSitemap, faShop, faMapLocation } from '@fortawesome/free-solid-svg-icons';

export interface Badge {
  color: string;
  text: string;
}

export interface NavItem {
  component: ForwardRefExoticComponent<any>;
  name: string;
  to?: RouteList;
  icon?: any;
  badge?: Badge;
  items?: NavItem[];
}

const _nav: NavItem[] = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: RouteList.DASHBOARD,
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Goods',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: RouteList.PRODUCTS,
    icon: <FontAwesomeIcon icon={faBarcode} className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Categories',
    to: RouteList.CATEGORIES,
    icon: <FontAwesomeIcon icon={faSitemap} className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Stores',
  },
  {
    component: CNavItem,
    name: 'Shops',
    to: RouteList.SHOPS,
    icon: <FontAwesomeIcon icon={faShop} className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Shop addresses',
    to: RouteList.SHOP_ADDRESSES,
    icon: <FontAwesomeIcon icon={faMapLocation} className="nav-icon" />,
  },
];

export default _nav;
