import {
  LoadUserProfileBooks,
  LoadUserProfileBooksFailure,
  LoadUserProfileBooksSuccess,
  LoadUserProfileInfo,
  LoadUserProfileInfoFailure,
  LoadUserProfileInfoSuccess,
  UserProfileActionsEnum,
} from './types';
import { UserProfileInfo } from '../../../models/user-profile-info';
import { BookData } from '../../../models/book-data';

export const loadUserProfileInfo = (id: string): LoadUserProfileInfo => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO,
  payload: id,
});

export const loadUserProfileInfoSuccess = (info: UserProfileInfo): LoadUserProfileInfoSuccess => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO_SUCCESS,
  payload: info,
});

export const loadUserProfileInfoFailure = (): LoadUserProfileInfoFailure => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_INFO_FAILURE,
});

export const loadUserProfileBooks = (userUrl: string, page: number, size: number): LoadUserProfileBooks => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS,
  payload: {
    page,
    size,
    userUrl,
  },
});

export const loadUserProfileBooksSuccess = (books: BookData[]): LoadUserProfileBooksSuccess => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS_SUCCESS,
  payload: books,
});

export const loadUserProfileBooksFailure = (): LoadUserProfileBooksFailure => ({
  type: UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS_FAILURE,
});
