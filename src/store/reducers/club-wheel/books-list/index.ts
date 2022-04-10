import {
  ClubWheelBookListState,
  DisplayClubWheelBooksWinnerPayload,
  LoadClubWheelBooksPayload,
  LoadClubWheelBooksSuccessPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelBookListState = {
  data: null,
  isLoading: false,
};

const clubWheelBooksListSlice = createSlice({
  name: 'clubWheelBooksList',
  initialState,
  reducers: {
    loadClubWheelBooks(state, action: PayloadAction<LoadClubWheelBooksPayload>) {
      state.isLoading = true;
    },
    loadClubWheelBooksSuccess(state, action: PayloadAction<LoadClubWheelBooksSuccessPayload>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    loadClubWheelBooksFailure(state) {
      state.isLoading = false;
    },
    displayClubWheelBooksWinner(state, action: PayloadAction<DisplayClubWheelBooksWinnerPayload>) {
      const { userIndex, bookIndex } = action.payload;
      if (state.data) {
        state.data[userIndex].books[bookIndex].isDisabled = true;
      }
    },
    resetClubWheelBooksList(state) {
      state.data = null;
    },
  },
});

export const {
  loadClubWheelBooks,
  loadClubWheelBooksSuccess,
  loadClubWheelBooksFailure,
  displayClubWheelBooksWinner,
  resetClubWheelBooksList,
} = clubWheelBooksListSlice.actions;

const clubWheelBooksListReducer = clubWheelBooksListSlice.reducer;
export default clubWheelBooksListReducer;