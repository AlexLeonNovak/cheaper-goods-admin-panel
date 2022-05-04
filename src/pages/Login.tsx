import React from 'react';

import LoginForm from '../components/LoginForm';

const Login = () => {
  // console.log('Login');
  return (
    <>
      {/*{isAuthenticated && <Navigate to={RouteList.DASHBOARD} />}*/}
      {/*{isSuccessLogin && <Navigate to={RouteList.HOME} />}*/}
      <LoginForm />
    </>
  );
};

export default Login;
