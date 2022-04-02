import { UserProfileInfo } from '../../../models/user-profile-info';
import { BookData } from '../../../models/book-data';

export interface UserProfileState {
  url: string | null;
  info: {
    data: UserProfileInfo | null;
    loading: boolean;
  };
  books: {
    data: BookData[];
    loading: boolean;
  };
}

export enum UserProfileActionsEnum {
  LOAD_USER_PROFILE_INFO = 'LOAD_USER_PROFILE_INFO',
  LOAD_USER_PROFILE_INFO_SUCCESS = 'LOAD_USER_PROFILE_INFO_SUCCESS',
  LOAD_USER_PROFILE_INFO_FAILURE = 'LOAD_USER_PROFILE_INFO_FAILURE',
  LOAD_USER_PROFILE_BOOKS = 'LOAD_USER_PROFILE_BOOKS',
  LOAD_USER_PROFILE_BOOKS_SUCCESS = 'LOAD_USER_PROFILE_BOOKS_SUCCESS',
  LOAD_USER_PROFILE_BOOKS_FAILURE = 'LOAD_USER_PROFILE_BOOKS_FAILURE',
}

export interface LoadUserProfileInfo {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO;
  payload: string;
}

export interface LoadUserProfileInfoSuccess {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO_SUCCESS;
  payload: UserProfileInfo;
}

export interface LoadUserProfileInfoFailure {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO_FAILURE;
}

export interface LoadUserProfileBooks {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS;
  payload: {
    userUrl: string;
    page: number;
    size: number;
  };
}

export interface LoadUserProfileBooksSuccess {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS_SUCCESS;
  payload: BookData[];
}

export interface LoadUserProfileBooksFailure {
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS_FAILURE;
}

export type UserProfileAction =
  | LoadUserProfileInfo
  | LoadUserProfileInfoSuccess
  | LoadUserProfileInfoFailure
  | LoadUserProfileBooks
  | LoadUserProfileBooksSuccess
  | LoadUserProfileBooksFailure;