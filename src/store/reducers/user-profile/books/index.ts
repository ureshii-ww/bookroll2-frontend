import { LoadUserProfileBooksPayload, LoadUserProfileBooksSuccessPayload, UserProfileBooksState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserProfileBooksState = {
  data: [],
  isLoading: false,
};

const userProfileBooksSlice = createSlice({
  name: 'userProfileBooks',
  initialState,
  reducers: {
    loadUserProfileBooks(state, action: PayloadAction<LoadUserProfileBooksPayload>) {
      state.isLoading = true;
    },
    loadUserProfileBooksSuccess(state, action: PayloadAction<LoadUserProfileBooksSuccessPayload>) {
      state.data = state.data.concat(action.payload);
      state.isLoading = false;
    },
    loadUserProfileBooksFailure(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

export const { loadUserProfileBooks, loadUserProfileBooksSuccess, loadUserProfileBooksFailure } =
  userProfileBooksSlice.actions;
export const userProfileBooksReducer = userProfileBooksSlice.reducer;