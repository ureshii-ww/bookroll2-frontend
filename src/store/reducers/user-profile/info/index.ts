import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LoadUserProfileInfoFailurePayload,
  LoadUserProfileInfoPayload,
  LoadUserProfileInfoSuccessPayload,
  UserProfileInfoState,
} from './types';

const initialState: UserProfileInfoState = {
  data: null,
  isLoading: false,
  error: null,
};

const userProfileInfoSlice = createSlice({
  name: 'userProfileInfo',
  initialState,
  reducers: {
    loadUserProfileInfo(state, action: PayloadAction<LoadUserProfileInfoPayload>) {
      state.isLoading = true;
      state.error = null;
    },
    loadUserProfileInfoSuccess(state, action: PayloadAction<LoadUserProfileInfoSuccessPayload>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    loadUserProfileInfoFailure(state, action: PayloadAction<LoadUserProfileInfoFailurePayload>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loadUserProfileInfo, loadUserProfileInfoSuccess, loadUserProfileInfoFailure } =
  userProfileInfoSlice.actions;

const userProfileInfoReducer =  userProfileInfoSlice.reducer;
export default userProfileInfoReducer;