import { combineReducers } from 'redux';
import clubWheelBooksListReducer from './books-list';
import clubWheelStagesReducer from './wheel-stages';
import clubWheelSegmentsReducer from './wheel-segments';
import clubWheelWinnerReducer from './wheel-winner';
import clubWheelHistoryReducer from './wheel-history';

const clubWheelReducer = combineReducers({
  booksList: clubWheelBooksListReducer,
  stages: clubWheelStagesReducer,
  segments: clubWheelSegmentsReducer,
  winner: clubWheelWinnerReducer,
  history: clubWheelHistoryReducer,
});
export default clubWheelReducer;
