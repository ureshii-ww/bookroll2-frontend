import { UserProfileInfo } from '../../../../models/user-profile-info';

export interface UserProfileInfoState {
  data: UserProfileInfo | null;
  isLoading: boolean;
}

export type LoadUserProfileInfoPayload = string;
export type LoadUserProfileInfoSuccessPayload = UserProfileInfo;


