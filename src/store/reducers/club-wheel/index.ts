import { combineReducers } from 'redux';
import clubWheelBooksListReducer from './books-list';

const clubWheelReducer = combineReducers({booksList: clubWheelBooksListReducer})
export default clubWheelReducer;