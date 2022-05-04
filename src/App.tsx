import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader';
import { RouteList } from './common/enums/routes.enum';
import { PrivateRoute } from './components/PrivateRoute';
import { useRefresh } from './hooks/auth/useRefresh';

const Login = lazy(() => import('./pages/Login'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  // const { isAuthenticated } = useAuth();
  const { isLoading } = useRefresh();
  /**
   * It's fixed the second render in useEffect
   * @link https://github.com/reactwg/react-18/discussions/18#discussioncomment-795623
   */
  // const effected = useRef(false);
  //
  // useEffect(() => {
  //   if (isAuthenticated && !effected.current) {
  //     effected.current = true;
  //     (async () => await refreshToken())();
  //   }
  // }, []);

  console.log(isLoading);
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
