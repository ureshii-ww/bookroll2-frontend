import { combineReducers } from 'redux';
import { clubProfileInfoReducer } from './info';

const clubProfileReducer = combineReducers({ info: clubProfileInfoReducer });
export default clubProfileReducer;