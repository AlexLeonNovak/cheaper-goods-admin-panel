import { IUser } from '../interfaces/user.interface';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const storage = {
  token: {
    get: () => localStorage.getItem(TOKEN_KEY),
    set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
    delete: () => localStorage.removeItem(TOKEN_KEY),
  },
  user: {
    get: (): IUser | null => {
      const user = localStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
      return null;
    },
    set: (user: IUser) => localStorage.setItem(USER_KEY, JSON.stringify(user)),
    delete: () => localStorage.removeItem(USER_KEY),
  },
};
