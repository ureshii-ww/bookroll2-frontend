import { WheelSegment } from '../../../../components/UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../../../../models/club-books';
import { BasicUserInfo } from '../../../../models/basic-user-info';
import { BasicBookInfo } from '../../../../models/basic-book-info';

export type ClubWheelWinnerState = {
  user: BasicUserInfo | null;
  book: BasicBookInfo | null;
  indexUser: number | null;
  indexBook: number | null;
}

export type SetClubWheelWinnerPayload = {
  winnerSegment: WheelSegment;
  clubBooks: ClubBooks[];
};