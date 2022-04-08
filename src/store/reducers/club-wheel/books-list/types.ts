import { ClubBooks } from '../../../../models/club-books';

export interface ClubWheelBookListState {
  data: ClubBooks[] | null;
  isLoading: boolean;
}

export type LoadClubWheelBooksPayload = string;
export type LoadClubWheelBooksSuccessPayload = ClubBooks[];
export type DisplayClubWheelBooksWinnerPayload = {
  userIndex: number;
  bookIndex: number;
};