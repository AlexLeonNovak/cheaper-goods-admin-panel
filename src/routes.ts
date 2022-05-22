import { lazy, LazyExoticComponent } from 'react';
import { RouteList } from './common/enums/routes.enum';

export interface Route {
  path: RouteList;
  element: LazyExoticComponent<any>;
  exact?: boolean;
  name: string;
  isPrivate?: boolean;
}

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ProductList = lazy(() => import('./pages/products/ProductList'));
const ProductCreate = lazy(() => import('./pages/products/ProductCreate'));
const Categories = lazy(() => import('./pages/categories/Categories'));
const CategoryCreate = lazy(() => import('./pages/categories/CategoryCreate'));
const CategoryView = lazy(() => import('./pages/categories/CategoryView'));
const CategoryUpdate = lazy(() => import('./pages/categories/CategoryUpdate'));
const Shops = lazy(() => import('./pages/shops/Shops'));
const ShopAddresses = lazy(() => import('./pages/shop-addresses/ShopAddresses'));

const routes: Route[] = [
  { path: RouteList.LOGIN, name: 'Login', element: Login },
  { path: RouteList.DASHBOARD, name: 'Dashboard', element: Dashboard },
  //Products
  { path: RouteList.PRODUCTS, name: 'Products', element: ProductList },
  { path: RouteList.PRODUCT_CREATE, name: 'Create product', element: ProductCreate },
  //Categories
  { path: RouteList.CATEGORIES, name: 'Categories', element: Categories },
  { path: RouteList.CATEGORY_CREATE, name: 'Create new category', element: CategoryCreate },
  { path: RouteList.CATEGORY_VIEW, name: 'View category', element: CategoryView },
  { path: RouteList.CATEGORY_EDIT, name: 'Update category', element: CategoryUpdate },
  //Shops
  { path: RouteList.SHOPS, name: 'Shops', element: Shops },
  //Shop addresses
  { path: RouteList.SHOP_ADDRESSES, name: 'Shop addresses', element: ShopAddresses },
];

export default routes;
