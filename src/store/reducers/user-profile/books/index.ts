import {
  DeleteUserProfileBookPayload,
  DeleteUserProfileBookSuccessPayload,
  LoadUserProfileBooksPayload,
  LoadUserProfileBooksSuccessPayload,
  ResetUserProfileBooksPayload,
  UserProfileBooksState,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserProfileBooksState = {
  data: [],
  isLoading: false,
  page: 1,
  size: 10,
  length: 1,
  isOut: false,
};

const userProfileBooksSlice = createSlice({
  name: 'userProfileBooks',
  initialState,
  reducers: {
    loadUserProfileBooks(state, action: PayloadAction<LoadUserProfileBooksPayload>) {
      state.page = action.payload.page;
      state.isLoading = true;
    },
    loadUserProfileBooksSuccess(
      state,
      { payload: { data, length } }: PayloadAction<LoadUserProfileBooksSuccessPayload>
    ) {
      const newArray = state.data.concat(data);
      state.data = newArray;
      state.isOut = newArray.length === length || newArray.length > length;
      state.length = length;
      state.isLoading = false;
    },
    loadUserProfileBooksFailure(state, action: PayloadAction) {
      state.isLoading = false;
    },
    resetUserProfileBooks(state, action: PayloadAction<ResetUserProfileBooksPayload>) {
      state.isOut = false;
      state.data = [];
    },
    deleteUserProfileBook(state, action: PayloadAction<DeleteUserProfileBookPayload>) {},
    deleteUserProfileBookSuccess(state, action: PayloadAction<DeleteUserProfileBookSuccessPayload>) {
      state.data = state.data.filter((element, index) => action.payload !== index);
      state.length -= 1;
    },
  },
});

export const {
  loadUserProfileBooks,
  loadUserProfileBooksSuccess,
  loadUserProfileBooksFailure,
  resetUserProfileBooks,
  deleteUserProfileBook,
  deleteUserProfileBookSuccess,
} = userProfileBooksSlice.actions;
export const userProfileBooksReducer = userProfileBooksSlice.reducer;
