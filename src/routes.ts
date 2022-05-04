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

const routes: Route[] = [
  { path: RouteList.LOGIN, name: 'Login', element: Login },
  { path: RouteList.DASHBOARD, name: 'Dashboard', element: Dashboard, isPrivate: true },
  { path: RouteList.PRODUCTS, name: 'Products', element: ProductList },
  { path: RouteList.PRODUCT_CREATE, name: 'Create product', element: ProductCreate },
];

export default routes;
