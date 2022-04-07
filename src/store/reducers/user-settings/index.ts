import { combineReducers } from 'redux';
import userSettingsInfoReducer from './info';

const userSettingsReducer = combineReducers({ info: userSettingsInfoReducer });
export default userSettingsReducer;