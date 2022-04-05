import {
  ClubProfileBooksState,
  DeleteClubProfileBookPayload,
  DeleteClubProfileBookSuccessPayload,
  LoadClubProfileBooksPayload,
  LoadClubProfileBooksSuccessPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileBooksState = {
  data: [],
  isLoading: false,
};

const clubProfileBooksSlice = createSlice({
  name: 'clubProfileBooks',
  initialState,
  reducers: {
    loadClubProfileBooks(state, action: PayloadAction<LoadClubProfileBooksPayload>) {
      state.isLoading = true;
    },
    loadClubProfileBooksSuccess(state, action: PayloadAction<LoadClubProfileBooksSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileBooksFailure(state, action: PayloadAction) {},
    deleteClubProfileBook(state, action: PayloadAction<DeleteClubProfileBookPayload>) {},
    deleteClubProfileBookSuccess(state, action: PayloadAction<DeleteClubProfileBookSuccessPayload>) {
      const { userUrl, index } = action.payload;
      const userIndex = state.data.findIndex(entry => entry.user.url === userUrl);
      state.data[userIndex].books.splice(index, 1);
    },
  },
});

export const {
  loadClubProfileBooks,
  loadClubProfileBooksFailure,
  loadClubProfileBooksSuccess,
  deleteClubProfileBook,
  deleteClubProfileBookSuccess,
} = clubProfileBooksSlice.actions;
export const clubProfileBooksReducer = clubProfileBooksSlice.reducer;
