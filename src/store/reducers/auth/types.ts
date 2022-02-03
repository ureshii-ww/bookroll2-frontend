import { UserData } from '../../../models/user-data';

export interface AuthState {
  isAuth: boolean;
  userData: UserData | null;
  // accessToken: string | null;
}

export enum AuthActionEnum {
  SET_USER_DATA = 'SET_USER_DATA',
  SET_IS_AUTH = 'SET_IS_AUTH'
}

export interface SetIsAuthAction {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}

export interface SetUserDataAction {
  type: AuthActionEnum.SET_USER_DATA;
  payload: UserData | null;
}

export type AuthAction =
  SetUserDataAction |
  SetIsAuthAction;