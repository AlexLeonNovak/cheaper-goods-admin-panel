import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import { RouteList } from './common/enums/routes.enum';
import Dashboard from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';

const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={RouteList.HOME} element={<Navigate to={RouteList.DASHBOARD} />} />
          <Route
            path={RouteList.DASHBOARD}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path={RouteList.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
