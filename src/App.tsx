import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader';
import { RouteList } from './common/enums/routes.enum';
import { PrivateRoute } from './components/PrivateRoute';
import { useRefresh } from './hooks/auth/useRefresh';

const Login = lazy(() => import('./pages/Login'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const { isLoading } = useRefresh();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={RouteList.LOGIN} element={<Login />} />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <DefaultLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
