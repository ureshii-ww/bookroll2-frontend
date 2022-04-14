import { fork } from 'redux-saga/effects';
import { watchDeleteUserProfileBook, watchLoadUserProfileBooks } from './watchers';

export default function* userProfileBooksSaga() {
  yield fork(watchLoadUserProfileBooks);
  yield fork(watchDeleteUserProfileBook);
}