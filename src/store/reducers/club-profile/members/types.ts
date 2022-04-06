import { BasicUserInfo } from '../../../../models/basic-user-info';

export interface ClubProfileMembersState {
  data: BasicUserInfo[];
  isLoading: boolean;
}

export type LoadClubProfileMembersPayload = string;
export type LoadClubProfileMembersSuccessPayload = BasicUserInfo[];