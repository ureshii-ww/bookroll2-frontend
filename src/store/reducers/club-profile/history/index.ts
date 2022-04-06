import { ClubProfileHistoryState, LoadClubProfileHistoryPayload, LoadClubProfileHistorySuccessPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileHistoryState = {
  data: [],
  isLoading: false,
};

const clubProfileHistorySlice = createSlice({
  name: 'clubProfileHistory',
  initialState,
  reducers: {
    loadClubProfileHistory(state, action: PayloadAction<LoadClubProfileHistoryPayload>) {
      state.isLoading = true;
    },
    loadClubProfileHistorySuccess(state, action: PayloadAction<LoadClubProfileHistorySuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileHistoryFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { loadClubProfileHistory, loadClubProfileHistoryFailure, loadClubProfileHistorySuccess } =
  clubProfileHistorySlice.actions;
export const clubProfileHistoryReducer = clubProfileHistorySlice.reducer;