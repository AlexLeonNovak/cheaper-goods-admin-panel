import { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  // console.log(context);
  return context;

  // return {
  //   isAuthenticated,
  //   user,
  //   token,
  //   setAuthData: saveAuthDataToLS,
  //   // getAuthData: getAuthDataLS,
  // };
};
