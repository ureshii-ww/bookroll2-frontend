import { combineReducers } from 'redux';
import { clubProfileInfoReducer } from './info';
import { clubProfileBooksReducer } from './books';

const clubProfileReducer = combineReducers({ info: clubProfileInfoReducer, books: clubProfileBooksReducer });
export default clubProfileReducer;
