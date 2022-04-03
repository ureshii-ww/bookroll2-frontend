import { fork } from 'redux-saga/effects';
import { watchDeleteUserProfileBook, watchLoadUserProfileBooks, watchResetUserProfileBooks } from './watchers';

export default function* userProfileBooksSaga() {
  yield fork(watchLoadUserProfileBooks);
  yield fork(watchResetUserProfileBooks);
  yield fork(watchDeleteUserProfileBook);
}