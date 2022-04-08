import {
  LoadUserSettingsAccountPayload,
  LoadUserSettingsAccountSuccessPayload,
  UpdatePasswordPayload,
  UserSettingsAccountState,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSettingsAccountState = {
  data: null,
  isLoading: false,
  isPasswordUpdating: false,
};

const userSettingsAccountSlice = createSlice({
  name: 'userSettingsAccount',
  initialState,
  reducers: {
    loadUserSettingsAccount(state, action: PayloadAction<LoadUserSettingsAccountPayload>) {
      state.isLoading = true;
    },
    loadUserSettingsAccountSuccess(state, action: PayloadAction<LoadUserSettingsAccountSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadUserSettingsAccountFailure(state) {
      state.isLoading = false;
    },
    updatePassword(state, action: PayloadAction<UpdatePasswordPayload>) {
      state.isPasswordUpdating = true;
    },
    updatePasswordSuccess(state) {
      state.isPasswordUpdating = false;
    },
    updatePasswordFailure(state) {
      state.isPasswordUpdating = false;
    },
  },
});

export const {
  loadUserSettingsAccount,
  loadUserSettingsAccountSuccess,
  loadUserSettingsAccountFailure,
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFailure,
} = userSettingsAccountSlice.actions;
const userSettingsAccountReducer = userSettingsAccountSlice.reducer;
export default userSettingsAccountReducer;
