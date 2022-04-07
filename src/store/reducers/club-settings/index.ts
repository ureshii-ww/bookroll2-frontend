import { combineReducers } from 'redux';
import clubSettingsInfoReducer from './info';

const clubSettingsReducer = combineReducers({info: clubSettingsInfoReducer,});
export default clubSettingsReducer;