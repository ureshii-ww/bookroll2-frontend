import { ClubWheelWinnerState, SetClubWheelWinnerPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelWinnerState = {
  user: null,
  book: null,
  indexUser: null,
  indexBook: null,
};

const clubWheelWinnerSlice = createSlice({
  name: 'clubWheelWinner',
  initialState,
  reducers: {
    setClubWheelWinner(state, action: PayloadAction<SetClubWheelWinnerPayload>) {
      const { winnerSegment, clubBooks } = action.payload;
      const indexUser = clubBooks.findIndex(entry => entry.user.url === winnerSegment.value?.userUrl);
      const indexBook = clubBooks[indexUser].books.findIndex(book => book.id === winnerSegment.value?.bookId);
      state.user = clubBooks[indexUser].user;
      state.book = clubBooks[indexUser].books[indexBook];
      state.indexUser = indexUser;
      state.indexBook = indexBook;
    },
  },
});

export const {setClubWheelWinner} = clubWheelWinnerSlice.actions;
const clubWheelWinnerReducer = clubWheelWinnerSlice.reducer;
export default clubWheelWinnerReducer;