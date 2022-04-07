import { UserData } from '../../../models/user-data';

export interface AuthState {
  isAuth: boolean;
  userData: UserData | null;
}

export type SetIsAuthPayload = boolean;
export type SetUserDataPayload = UserData | null;
export type LoginPayload = {
  email: string;
  password: string;
};
export type JoinClubPayload = string;
export type LeaveClubPayload = string;