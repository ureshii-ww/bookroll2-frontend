import { AddWinnerToClubWheelHistoryPayload, ClubWheelHistoryState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelHistoryState = {
  data: [],
};

const clubWheelHistorySlice = createSlice({
  name: 'clubWheelHistory',
  initialState,
  reducers: {
    addWinnerToClubHistory(state, action: PayloadAction<AddWinnerToClubWheelHistoryPayload>) {
      state.data.push(action.payload);
    },
  },
});

export const { addWinnerToClubHistory } = clubWheelHistorySlice.actions;
const clubWheelHistoryReducer = clubWheelHistorySlice.reducer;
export default clubWheelHistoryReducer;
