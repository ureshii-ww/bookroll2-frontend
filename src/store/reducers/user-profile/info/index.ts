import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadUserProfileInfoPayload, LoadUserProfileInfoSuccessPayload, UserProfileInfoState } from './types';

const initialState: UserProfileInfoState = {
  data: null,
  isLoading: false,
};

const userProfileInfoSlice = createSlice({
  name: 'userProfileInfo',
  initialState,
  reducers: {
    loadUserProfileInfo(state, action: PayloadAction<LoadUserProfileInfoPayload>) {
      state.isLoading = true;
    },
    loadUserProfileInfoSuccess(state, action: PayloadAction<LoadUserProfileInfoSuccessPayload>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    loadUserProfileInfoFailure(state, action: PayloadAction) {
      state.isLoading = false;
    },
  },
});

export const { loadUserProfileInfo, loadUserProfileInfoSuccess, loadUserProfileInfoFailure } =
  userProfileInfoSlice.actions;

const userProfileInfoReducer =  userProfileInfoSlice.reducer;
export default userProfileInfoReducer;