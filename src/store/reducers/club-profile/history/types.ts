import { BookData } from '../../../../models/book-data';

export interface ClubProfileHistoryState {
  data: BookData[];
  isLoading: boolean;
}

export type LoadClubProfileHistoryPayload = string;
export type LoadClubProfileHistorySuccessPayload = BookData[];