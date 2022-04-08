import { combineReducers } from 'redux';
import userSettingsInfoReducer from './info';
import userSettingsAccountReducer from './account';

const userSettingsReducer = combineReducers({ info: userSettingsInfoReducer, account: userSettingsAccountReducer });
export default userSettingsReducer;
