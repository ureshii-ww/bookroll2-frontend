import {
  ClubWheelWinnerState,
  ConfirmClubWheelWinnerPayload,
  MakeClubWheelWinnerPayload,
  SetClubWheelWinnerPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelWinnerState = {
  data: null,
  isConfirming: false,
  isConfirmed: false,
};

const clubWheelWinnerSlice = createSlice({
  name: 'clubWheelWinner',
  initialState,
  reducers: {
    makeClubWheelWinner(state, action: PayloadAction<MakeClubWheelWinnerPayload>) {},
    setClubWheelWinner(state, action: PayloadAction<SetClubWheelWinnerPayload>) {
      state.data = action.payload;
    },
    confirmClubWheelWinner(state, action: PayloadAction<ConfirmClubWheelWinnerPayload>) {
      state.isConfirming = true;
    },
    confirmClubWheelWinnerSuccess(state) {
      state.isConfirming = false;
      state.isConfirmed = true;
    },
    confirmClubWheelWinnerFailure(state) {
      state.isConfirming = false;
    },
    resetClubWheelWinner(state) {
      state.data = null;
    },
    resetClubWheelIsConfirmed(state) {
      state.isConfirmed = false;
    },
  },
});

export const {
  makeClubWheelWinner,
  setClubWheelWinner,
  confirmClubWheelWinner,
  confirmClubWheelWinnerSuccess,
  confirmClubWheelWinnerFailure,
  resetClubWheelWinner,
  resetClubWheelIsConfirmed,
} = clubWheelWinnerSlice.actions;
const clubWheelWinnerReducer = clubWheelWinnerSlice.reducer;
export default clubWheelWinnerReducer;
