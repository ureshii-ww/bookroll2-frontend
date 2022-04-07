import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../reducers/system-notifications';
import { joinClub, leaveClub, login, setIsAuth, setUserData } from '../../reducers/auth';
import AuthService from '../../../services/auth.service';
import { setUserToken, setUserUrl } from '../../../api';
import ClubService from '../../../services/club.service';

export function* loginSaga(action: ReturnType<typeof login>) {
  const { email, password } = action.payload;
  try {
    const response: Awaited<ReturnType<typeof AuthService.login>> = yield call(AuthService.login, email, password);
    yield call([localStorage, localStorage.setItem], 'isAuth', JSON.stringify(true));
    yield put(setIsAuth(true));
    yield call([localStorage, localStorage.setItem], 'userData', JSON.stringify(response.data));
    yield put(setUserData(response.data));
    yield call(setUserUrl, response.data.url);
    yield call(setUserToken, response.headers['x-access-token']);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}

export function* logoutSaga() {
  try {
    yield call(AuthService.logout);
    yield call([localStorage, localStorage.clear]);
    yield put(setIsAuth(false));
    yield put(setUserData(null));
    yield call(setUserUrl, '');
    yield call(setUserToken, '');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}

export function* joinClubSaga(action: ReturnType<typeof joinClub>) {
  const clubUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.joinClub>> = yield call(ClubService.joinClub, clubUrl);
    yield call([localStorage, localStorage.setItem], 'userData', JSON.stringify(response.data));
    yield put(setUserData(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}

export function* leaveClubSaga(action: ReturnType<typeof leaveClub>) {
  const clubUrl = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.leaveClub>> = yield call(ClubService.leaveClub, clubUrl);
    yield call([localStorage, localStorage.setItem], 'userData', JSON.stringify(response.data));
    yield put(setUserData(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}
