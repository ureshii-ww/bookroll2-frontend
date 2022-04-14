import { ClubProfileRulesState, LoadClubProfileRulesPayload, LoadClubProfileRulesSuccessPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubProfileRulesState = {
  data: '',
  isLoading: false,
};

const clubProfileRulesSlice = createSlice({
  name: 'clubProfileRules',
  initialState,
  reducers: {
    loadClubProfileRules(state, action: PayloadAction<LoadClubProfileRulesPayload>) {
      state.isLoading = true;
    },
    loadClubProfileRulesSuccess(state, action: PayloadAction<LoadClubProfileRulesSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadClubProfileRulesFailure(state) {
      state.isLoading = false;
    },
    resetClubProfileRules(state) {
      state.data = '';
    },
  },
});

export const { loadClubProfileRules, loadClubProfileRulesFailure, loadClubProfileRulesSuccess, resetClubProfileRules } =
  clubProfileRulesSlice.actions;
export const clubProfileRulesReducer = clubProfileRulesSlice.reducer;
