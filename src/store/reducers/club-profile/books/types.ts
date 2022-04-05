import { ClubBooks } from '../../../../models/club-books';

export interface ClubProfileBooksState {
  data: ClubBooks[];
  isLoading: boolean;
}

export type LoadClubProfileBooksPayload = string;
export type LoadClubProfileBooksSuccessPayload = ClubBooks[];
export type DeleteClubProfileBookPayload = {
  clubUrl: string;
  userUrl: string;
  index: number;
}
export type DeleteClubProfileBookSuccessPayload = {
  userUrl: string;
  index: number;
};