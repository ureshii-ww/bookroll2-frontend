import { ClubProfileInfoState, LoadClubProfileInfoPayload, LoadClubProfileInfoSuccessPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileInfoState = {
  data: null,
  isLoading: false,
};

const clubProfileInfoSlice = createSlice({
  name: 'clubProfileInfo',
  initialState,
  reducers: {
    loadClubProfileInfo(state, action: PayloadAction<LoadClubProfileInfoPayload>) {
      state.isLoading = true;
    },
    loadClubProfileInfoSuccess(state, action: PayloadAction<LoadClubProfileInfoSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileInfoFailure(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

export const { loadClubProfileInfo, loadClubProfileInfoFailure, loadClubProfileInfoSuccess } =
  clubProfileInfoSlice.actions;
export const clubProfileInfoReducer = clubProfileInfoSlice.reducer;