import { ClubProfileInfo } from '../../../../models/club-profile-info';

export interface ClubProfileInfoState {
  data: ClubProfileInfo | null;
  isLoading: boolean;
}

export type LoadClubProfileInfoPayload = string;
export type LoadClubProfileInfoSuccessPayload = ClubProfileInfo;