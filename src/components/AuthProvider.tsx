import React, { useEffect, useState } from 'react';
import { IUser } from '../common/interfaces/user.interface';
import { storage } from '../common/utils/storage';
import { ChildrenProps } from '../common/types/children-props.type';
export interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser | null;
}

//
// const [isAuthenticated, setIsAuthenticated] = useState(false);
// const [user, setUser] = useState(null);
//

export const AuthContext = React.createContext<IAuthContext | null>(null);
// const { Provider: AuthProvider } = AuthContext;

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userStorage = storage.user.get();
    userStorage && setUser(userStorage);
    const token = storage.token.get();
    token && setIsAuthenticated(!!token);
  }, [storage]);

  const initialState: IAuthContext = {
    isAuthenticated,
    user,
  };
  // const { refreshToken } = useRefresh();
  // useEffect(() => {
  //   if (initialState.isAuthenticated) {
  //     refreshToken();
  //   }
  // }, [initialState]);
  return <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>;
};
