import { ClubSettingsInfo } from '../../../../models/club-settings-info';

export type ClubSettingsInfoState = {
  data: ClubSettingsInfo;
  isLoading: boolean;
  isUpdating: boolean;
}

export type LoadClubSettingsInfoPayload = string;
export type LoadClubSettingsInfoSuccessPayload = ClubSettingsInfo;
export type UpdateClubSettingsInfoPayload = {
  clubUrl: string;
  masterUrl: string;
  clubname: string;
  description: string;
}