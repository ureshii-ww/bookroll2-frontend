import { combineReducers } from 'redux';
import userProfileInfoReducer from './info';
import { userProfileBooksReducer } from './books';

const userProfileReducer = combineReducers({ info: userProfileInfoReducer, books: userProfileBooksReducer });
export default userProfileReducer;
