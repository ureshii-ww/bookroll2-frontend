import {
  ClubSettingsInfoState,
  LoadClubSettingsInfoPayload,
  LoadClubSettingsInfoSuccessPayload,
  UpdateClubSettingsInfoPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubSettingsInfoState = {
  data: {
    clubname: '',
    rules: '',
    members: [],
  },
  isLoading: false,
  isUpdating: true,
};

const clubSettingsInfoSlice = createSlice({
  name: 'clubSettingsInfo',
  initialState,
  reducers: {
    loadClubSettingsInfo(state, action: PayloadAction<LoadClubSettingsInfoPayload>) {
      state.isLoading = true;
    },
    loadClubSettingsInfoSuccess(state, action: PayloadAction<LoadClubSettingsInfoSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubSettingsInfoFailure(state) {
      state.isLoading = false;
    },
    updateClubSettingsInfo(state, action: PayloadAction<UpdateClubSettingsInfoPayload>) {
      state.isUpdating = true;
    },
    updateClubSettingsInfoSuccess(state) {
      state.isUpdating = false;
    },
    updateClubSettingsInfoFailure(state) {
      state.isUpdating = false;
    }
  },
});

export const {
  loadClubSettingsInfo,
  loadClubSettingsInfoSuccess,
  loadClubSettingsInfoFailure,
  updateClubSettingsInfo,
  updateClubSettingsInfoSuccess,
  updateClubSettingsInfoFailure,
} = clubSettingsInfoSlice.actions;

const clubSettingsInfoReducer = clubSettingsInfoSlice.reducer;
export default clubSettingsInfoReducer;
