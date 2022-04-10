import { fork } from 'redux-saga/effects';
import { watchConfirmClubWheelWinner, watchMakeClubWheelWinner } from './watchers';

export function* clubWheelWinnerSaga () {
  yield fork(watchConfirmClubWheelWinner);
  yield fork(watchMakeClubWheelWinner);
}