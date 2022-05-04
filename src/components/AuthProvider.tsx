import React, { useMemo, useState } from 'react';
import { IAuthData, IUser } from '../common/interfaces/user.interface';
import { ChildrenProps } from '../common/types/children-props.type';
import { storage } from '../common/utils/storage';
export interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser | null;
  setAuthData: (authData: IAuthData | null) => void;
  // setAuthenticated: (isAuthenticated: boolean) => void;
  // setUser: (user: IUser | null) => void;
  // onLogin?: () => void;
  // onLogout?: () => void;
}

export const AuthContext = React.createContext<IAuthContext | null>(null);
// const { Provider: AuthProvider } = AuthContext;

// const usePrevious = (value: any) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);
//   return ref.current;
// };

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<IUser | null>(storage.user.get());
  const [isAuthenticated, setIsAuthenticated] = useState(!!storage.token.get());
  // const previousAuthenticated = usePrevious(isAuthenticated);

  const setAuthData = (authData: IAuthData | null) => {
    setUser(authData?.user || null);
    setIsAuthenticated(!!authData);
    storage.token.set(authData?.accessToken || null);
    storage.user.set(authData?.user || null);
  };

  // useEffect(() => {
  //   console.log('AuthProvider', storage);
  //   setUser(storage.user.get());
  //   setIsAuthenticated(!!storage.token.get());
  // }, [storage]);

  const initialState: IAuthContext = useMemo(
    () => ({
      isAuthenticated,
      user,
      setAuthData,
    }),
    [user],
  );

  return <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>;
};
