import {
  ClubProfileInfoState,
  LoadClubProfileInfoFailurePayload,
  LoadClubProfileInfoPayload,
  LoadClubProfileInfoSuccessPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileInfoState = {
  data: null,
  isLoading: false,
  error: null,
};

const clubProfileInfoSlice = createSlice({
  name: 'clubProfileInfo',
  initialState,
  reducers: {
    loadClubProfileInfo(state, action: PayloadAction<LoadClubProfileInfoPayload>) {
      state.isLoading = true;
      state.error = null;
    },
    loadClubProfileInfoSuccess(state, action: PayloadAction<LoadClubProfileInfoSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileInfoFailure(state, action: PayloadAction<LoadClubProfileInfoFailurePayload>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    joinClubSuccess(state) {
      if (state.data) {
        state.data.isInClub = true;
      }
    },
    leaveClubSuccess(state) {
      if (state.data) {
        state.data.isInClub = false;
        state.data.isMaster = false;
      }
    },
  },
});

export const {
  loadClubProfileInfo,
  loadClubProfileInfoFailure,
  loadClubProfileInfoSuccess,
  joinClubSuccess,
  leaveClubSuccess,
} = clubProfileInfoSlice.actions;
export const clubProfileInfoReducer = clubProfileInfoSlice.reducer;
