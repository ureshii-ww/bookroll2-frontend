import { BookData } from '../../../../models/book-data';

export interface UserProfileBooksState {
  data: BookData[];
  isLoading: boolean;
}

export interface LoadUserProfileBooksPayload {
  userUrl: string;
  page: number;
  size: number;
}

export type LoadUserProfileBooksSuccessPayload = BookData[];