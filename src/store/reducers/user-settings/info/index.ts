import {
  UserSettingsInfoState,
  LoadUserSettingsInfoPayload,
  LoadUserSettingsInfoSuccessPayload,
  UpdateUserSettingsInfoPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSettingsInfoState = {
  data: {
    username: '',
    emoji: '',
    color: '',
  },
  isLoading: false,
  isUpdating: true,
};

const userSettingsInfoSlice = createSlice({
  name: 'userSettingsInfo',
  initialState,
  reducers: {
    loadUserSettingsInfo(state, action: PayloadAction<LoadUserSettingsInfoPayload>) {
      state.isLoading = true;
    },
    loadUserSettingsInfoSuccess(state, action: PayloadAction<LoadUserSettingsInfoSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadUserSettingsInfoFailure(state) {
      state.isLoading = false;
    },
    updateUserSettingsInfo(state, action: PayloadAction<UpdateUserSettingsInfoPayload>) {
      state.isUpdating = true;
    },
    updateUserSettingsInfoSuccess(state) {
      state.isUpdating = false;
    },
    updateUserSettingsInfoFailure(state) {
      state.isUpdating = false;
    }
  },
});

export const {
  loadUserSettingsInfo,
  loadUserSettingsInfoSuccess,
  loadUserSettingsInfoFailure,
  updateUserSettingsInfo,
  updateUserSettingsInfoSuccess,
  updateUserSettingsInfoFailure,
} = userSettingsInfoSlice.actions;

const userSettingsInfoReducer = userSettingsInfoSlice.reducer;
export default userSettingsInfoReducer;
