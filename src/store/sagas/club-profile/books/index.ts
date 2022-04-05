import { fork } from 'redux-saga/effects';
import { watchDeleteClubProfileBook, watchLoadClubProfileBooks } from './watchers';

export function* clubProfileBooksSaga() {
  yield fork(watchLoadClubProfileBooks);
  yield fork(watchDeleteClubProfileBook);
}