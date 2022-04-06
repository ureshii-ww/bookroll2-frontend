import { combineReducers } from 'redux';
import { clubProfileInfoReducer } from './info';
import { clubProfileBooksReducer } from './books';
import { clubProfileMembersReducer } from './members';
import { clubProfileRulesReducer } from './rules';
import { clubProfileHistoryReducer } from './history';

const clubProfileReducer = combineReducers({
  info: clubProfileInfoReducer,
  books: clubProfileBooksReducer,
  members: clubProfileMembersReducer,
  rules: clubProfileRulesReducer,
  history: clubProfileHistoryReducer,
});
export default clubProfileReducer;
