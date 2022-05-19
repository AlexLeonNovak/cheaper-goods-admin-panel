export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IAuthData {
  user: IUser | null;
  accessToken: string | null;
}
