import { AddWinnerToClubWheelHistoryPayload, ClubWheelHistoryState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelHistoryState = {
  data: [],
  rollsCount: 0,
};

const clubWheelHistorySlice = createSlice({
  name: 'clubWheelHistory',
  initialState,
  reducers: {
    addWinnerToClubHistory(state, action: PayloadAction<AddWinnerToClubWheelHistoryPayload>) {
      state.data.push(action.payload);
    },
    incrementClubWheelRollsCount(state) {
      state.rollsCount += 1;
    },
    resetClubWheelBooksHistory(state) {
      state.data = [];
      state.rollsCount = 0;
    },
  },
});

export const { addWinnerToClubHistory, incrementClubWheelRollsCount, resetClubWheelBooksHistory } =
  clubWheelHistorySlice.actions;
const clubWheelHistoryReducer = clubWheelHistorySlice.reducer;
export default clubWheelHistoryReducer;
