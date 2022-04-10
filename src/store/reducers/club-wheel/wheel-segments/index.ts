import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClubWheelSegmentsState, CreateClubWheelSegmentsPayload, RemoveClubWheelSegmentPayload } from './types';
import determineTextColor from '../../../../components/Containers/WheelContainer/helpers/determineTextColor';

const initialState: ClubWheelSegmentsState = {
  data: [],
};

const clubWheelSegmentsSlice = createSlice({
  name: 'clubWheelSegments',
  initialState,
  reducers: {
    createClubWheelSegments(state, action: PayloadAction<CreateClubWheelSegmentsPayload>) {
      const clubBooks = action.payload;
      const tempArray = [];

      for (let i = 0; i < clubBooks.length; i++) {
        const item = clubBooks[i];
        for (let j = 0; j < item.books.length; j++) {
          tempArray.push({
            text: `${item.user.username} ${item.user.emoji}`,
            fillStyle: item.user.color,
            textFillStyle: determineTextColor(item.user.color),
            value: {
              bookId: item.books[j].id,
              userUrl: item.user.url,
            },
          });
        }
      }

      state.data = tempArray;
    },
    shuffleClubWheelSegments(state) {
      let tempArray = [...state.data];
      const length = tempArray.length - 1;

      for (let i = length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
      }

      state.data = tempArray;
    },
    removeClubWheelSegment(state, action: PayloadAction<RemoveClubWheelSegmentPayload>) {
      const winnerSegment = action.payload;

      state.data = state.data.filter(
        wheelSegment =>
          !(
            wheelSegment.value?.userUrl === winnerSegment.value?.userUrl &&
            wheelSegment.value?.bookId === winnerSegment.value?.bookId
          )
      );
    },
    resetClubWheelSegments(state) {
      state.data = [];
    },
  },
});

export const { createClubWheelSegments, removeClubWheelSegment, shuffleClubWheelSegments, resetClubWheelSegments } =
  clubWheelSegmentsSlice.actions;
const clubWheelSegmentsReducer = clubWheelSegmentsSlice.reducer;
export default clubWheelSegmentsReducer;
