import { ClubProfileInfo } from '../../../../models/club-profile-info';
import { PageError } from '../../../../models/page-error';

export interface ClubProfileInfoState {
  data: ClubProfileInfo | null;
  isLoading: boolean;
  error: PageError | null;
}

export type LoadClubProfileInfoPayload = string;
export type LoadClubProfileInfoSuccessPayload = ClubProfileInfo;
export type LoadClubProfileInfoFailurePayload = PageError;