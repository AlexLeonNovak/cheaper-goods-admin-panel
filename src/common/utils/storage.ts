import { IUser } from '../interfaces/user.interface';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const storage = {
  token: {
    get: () => JSON.parse(localStorage.getItem(TOKEN_KEY) || 'null'),
    set: (token: string | null) =>
      token ? localStorage.setItem(TOKEN_KEY, JSON.stringify(token)) : localStorage.removeItem(TOKEN_KEY),
  },
  user: {
    get: (): IUser | null => JSON.parse(localStorage.getItem(USER_KEY) || 'null'),
    set: (user: IUser | null) =>
      user ? localStorage.setItem(USER_KEY, JSON.stringify(user)) : localStorage.removeItem(USER_KEY),
  },
};
