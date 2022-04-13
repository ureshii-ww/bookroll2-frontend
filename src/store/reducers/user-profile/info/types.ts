import { UserProfileInfo } from '../../../../models/user-profile-info';
import { PageError } from '../../../../models/page-error';

export interface UserProfileInfoState {
  data: UserProfileInfo | null;
  isLoading: boolean;
  error: PageError | null;
}

export type LoadUserProfileInfoPayload = string;
export type LoadUserProfileInfoSuccessPayload = UserProfileInfo;
export type LoadUserProfileInfoFailurePayload = PageError;


