import { UserSettingsInfoData } from '../../../../models/user-settings-info-data';

export type UserSettingsInfoState = {
  data: UserSettingsInfoData;
  isLoading: boolean;
  isUpdating: boolean;
}

export type LoadUserSettingsInfoPayload = string;
export type LoadUserSettingsInfoSuccessPayload = UserSettingsInfoData;
export type UpdateUserSettingsInfoPayload = {
  userUrl: string;
  username: string;
  emoji: string;
  color: string;
}