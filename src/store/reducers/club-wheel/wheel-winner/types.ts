import { WheelSegment } from '../../../../components/UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../../../../models/club-books';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

export type ClubWheelWinnerState = {
  data: WheelWinnerInfo | null;
  isConfirming: boolean;
  isConfirmed: boolean;
}

export type MakeClubWheelWinnerPayload = {
  winnerSegment: WheelSegment;
  clubBooks: ClubBooks[];
};

export type SetClubWheelWinnerPayload = WheelWinnerInfo;

export type ConfirmClubWheelWinnerPayload = {
  clubUrl: string;
  book:string;
};