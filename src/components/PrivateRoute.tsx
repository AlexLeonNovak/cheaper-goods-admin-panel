import React from 'react';
import { useAuth } from '../hooks/auth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { RouteList } from '../common/enums/routes.enum';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={RouteList.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};
