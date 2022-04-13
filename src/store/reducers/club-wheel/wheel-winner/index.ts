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
    },
    confirmClubWheelWinnerFailure(state) {
      state.isConfirming = false;
    },
    resetClubWheelWinner(state) {
      state.data = null;
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
} = clubWheelWinnerSlice.actions;
const clubWheelWinnerReducer = clubWheelWinnerSlice.reducer;
export default clubWheelWinnerReducer;
