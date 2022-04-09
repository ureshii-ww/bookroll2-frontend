import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

export type ClubWheelHistoryState = {
  data: WheelWinnerInfo[];
}

export type AddWinnerToClubWheelHistoryPayload = WheelWinnerInfo;