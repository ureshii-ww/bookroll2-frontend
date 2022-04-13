import {
  confirmClubWheelWinner,
  confirmClubWheelWinnerFailure,
  confirmClubWheelWinnerSuccess,
  makeClubWheelWinner,
  setClubWheelWinner,
} from '../../../reducers/club-wheel/wheel-winner';
import ClubService from '../../../../services/club.service';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../../reducers/system-notifications';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import { addWinnerToClubHistory } from '../../../reducers/club-wheel/wheel-history';
import { displayClubWheelBooksWinner } from '../../../reducers/club-wheel/books-list';
import { push } from 'redux-first-history';
import { RouteNames } from '../../../../routes/route-names.enum';

export function* makeClubWheelWinnerSaga(action: ReturnType<typeof makeClubWheelWinner>) {
  const { winnerSegment, clubBooks } = action.payload;
  const userIndex: number = yield call(
    [clubBooks, clubBooks.findIndex],
    entry => entry.user.url === winnerSegment.value?.userUrl
  );
  const bookIndex: number = yield call(
    [clubBooks[userIndex].books, clubBooks[userIndex].books.findIndex],
    book => book.id === winnerSegment.value?.bookId
  );
  const wheelWinner: WheelWinnerInfo = {
    user: clubBooks[userIndex].user,
    book: clubBooks[userIndex].books[bookIndex],
    userIndex,
    bookIndex,
  };
  yield put(setClubWheelWinner(wheelWinner));
  yield put(addWinnerToClubHistory(wheelWinner));
  yield put(displayClubWheelBooksWinner({ bookIndex, userIndex }));
}

export function* confirmClubWheelWinnerSaga(action: ReturnType<typeof confirmClubWheelWinner>) {
  const { clubUrl, book } = action.payload;
  try {
    yield call(ClubService.confirmBook, clubUrl, book);
    yield put(confirmClubWheelWinnerSuccess());
    yield put(push(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`));
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
    yield put(confirmClubWheelWinnerFailure());
  }
}
