import { UserAccountInfo } from '../../../../models/user-account-info';

export type UserSettingsAccountState = {
  data: UserAccountInfo | null;
  isLoading: boolean;
  isPasswordUpdating: boolean;
}

export type LoadUserSettingsAccountPayload = string;
export type LoadUserSettingsAccountSuccessPayload = UserAccountInfo;
export type UpdatePasswordPayload = {
  userUrl: string;
  oldPassword: string;
  newPassword: string;
}


