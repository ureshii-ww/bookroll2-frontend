import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

export type ClubWheelHistoryState = {
  data: WheelWinnerInfo[];
  rollsCount: number;
}

export type AddWinnerToClubWheelHistoryPayload = WheelWinnerInfo;