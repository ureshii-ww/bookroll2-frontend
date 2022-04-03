import { BookData } from '../../../../models/book-data';

export interface UserProfileBooksState {
  data: BookData[];
  isLoading: boolean;
  page: number;
  size: number;
  length: number;
  isOut: boolean;
}

export interface LoadUserProfileBooksPayload {
  userUrl: string;
  page: number;
  size: number;
}

export interface LoadUserProfileBooksSuccessPayload {
  data: BookData[];
  length: number;
}

export type ResetUserProfileBooksPayload = string;

export interface DeleteUserProfileBookPayload {
  userUrl: string;
  index: number;
}

export type DeleteUserProfileBookSuccessPayload = number;