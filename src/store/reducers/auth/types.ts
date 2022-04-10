import { UserData } from '../../../models/user-data';

export interface AuthState {
  isAuth: boolean;
  userData: UserData | null;
  isRegistering: boolean;
  isLoggingIn: boolean;
  isCreatingClub: boolean;
}

export type SetIsAuthPayload = boolean;
export type SetUserDataPayload = UserData | null;
export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
}
export type LoginPayload = {
  email: string;
  password: string;
};
export type CreateClubPayload = string;
export type JoinClubPayload = string;
export type LeaveClubPayload = string;