import { ClubProfileMembersState, LoadClubProfileMembersPayload, LoadClubProfileMembersSuccessPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileMembersState = {
  data: [],
  isLoading: false,
};

const clubProfileMembersSlice = createSlice({
  name: 'clubProfileMembers',
  initialState,
  reducers: {
    loadClubProfileMembers(state, action: PayloadAction<LoadClubProfileMembersPayload>) {
      state.isLoading = true;
    },
    loadClubProfileMembersSuccess(state, action: PayloadAction<LoadClubProfileMembersSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileMembersFailure(state) {
      state.isLoading = false;
    },
    resetClubProfileMembers(state) {
      state.data = [];
    },
  },
});

export const {
  loadClubProfileMembers,
  loadClubProfileMembersFailure,
  loadClubProfileMembersSuccess,
  resetClubProfileMembers,
} = clubProfileMembersSlice.actions;
export const clubProfileMembersReducer = clubProfileMembersSlice.reducer;