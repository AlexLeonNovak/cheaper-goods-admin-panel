import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import routes, { Route } from '../routes';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname;
  const navigate = useNavigate();

  const getRouteName = (pathname: string, routes: Route[]) => {
    const currentRoute = routes.find(route => route.path === pathname);
    return currentRoute ? currentRoute.name : false;
  };

  const getBreadcrumbs = (location: string) => {
    const breadcrumbs: MenuItem[] = [];
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      const routeName = getRouteName(currentPathname, routes);
      routeName &&
        breadcrumbs.push({
          command: () => navigate(currentPathname),
          label: routeName,
          expanded: index + 1 === array.length,
        });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);
  const home: MenuItem = {
    icon: 'pi pi-home',
    command: () => navigate('/'),
  };
  return <BreadCrumb className="m-0" model={breadcrumbs} home={home} />;
};

export default React.memo(AppBreadcrumb);
