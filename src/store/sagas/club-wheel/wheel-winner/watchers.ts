import { takeEvery } from 'redux-saga/effects';
import { confirmClubWheelWinner, makeClubWheelWinner } from '../../../reducers/club-wheel/wheel-winner';
import { confirmClubWheelWinnerSaga, makeClubWheelWinnerSaga } from './workers';

export function* watchMakeClubWheelWinner() {
  yield takeEvery(makeClubWheelWinner, makeClubWheelWinnerSaga);
}

export function* watchConfirmClubWheelWinner() {
  yield takeEvery(confirmClubWheelWinner.type, confirmClubWheelWinnerSaga);
}