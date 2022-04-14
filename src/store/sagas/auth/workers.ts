import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addSystemNotification } from '../../reducers/system-notifications';
import {
  createClub,
  joinClub,
  leaveClub,
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
  setIsAuth,
  setUserData,
} from '../../reducers/auth';
import AuthService from '../../../services/auth.service';
import { setUserToken, setUserUrl } from '../../../api';
import ClubService from '../../../services/club.service';
import { closeModal } from '../../reducers/modal';
import { joinClubSuccess, leaveClubSuccess } from '../../reducers/club-profile/info';
import { setTheme } from '../../reducers/theme';
import { push } from 'redux-first-history';
import { RouteNames } from '../../../routes/route-names.enum';
import { removeDarkFromBody } from '../../../helpers/remove-dark-from-body';

export function* registerSaga(action: ReturnType<typeof register>) {
  const { username, email, password } = action.payload;
  try {
    yield call(AuthService.register, username, email, password);
    yield put(registerSuccess());
    yield put(addSystemNotification({message: 'Вы успешно зарегистрированы', notificationType: 'success'}));
    yield put(push(`${RouteNames.LOGIN}`));
  } catch (error) {
    yield put(registerFailure());
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}

export function* loginSaga(action: ReturnType<typeof login>) {
  const { email, password } = action.payload;
  try {
    const response: Awaited<ReturnType<typeof AuthService.login>> = yield call(AuthService.login, email, password);
    yield put(loginSuccess());
    yield call([localStorage, localStorage.setItem], 'userData', JSON.stringify(response.data));
    yield put(setUserData(response.data));
    yield call(setUserUrl, response.data.url);
    yield call(setUserToken, response.headers['x-access-token']);
    yield call([localStorage, localStorage.setItem], 'isAuth', JSON.stringify(true));
    yield put(setIsAuth(true));
    yield put(push(`${RouteNames.USER_PROFILE_BASE}${response.data.url}`))
  } catch (error) {
    yield put(loginFailure());
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: JSON.parse(error.request.response).message, notificationType: 'error' }));
    }
  }
}

export function* logoutSaga() {
  try {
    yield call(AuthService.logout);
    yield call([localStorage, localStorage.clear]);
    yield put(setIsAuth(false));
    yield put(setUserData(null));
    yield put(setTheme('light'));
    yield call(removeDarkFromBody);
    yield call(setUserUrl, '');
    yield call(setUserToken, '');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}

export function* createClubSaga(action: ReturnType<typeof createClub>) {
  const clubname = action.payload;
  try {
    const response: Awaited<ReturnType<typeof ClubService.createClub>> = yield call(ClubService.createClub, clubname);
    yield call([localStorage, localStorage.setItem], 'userData', JSON.stringify(response.data));
    yield put(setUserData(response.data));
    yield put(joinClubSuccess());
    yield put(closeModal());
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
    yield put(joinClubSuccess());
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
    yield put(leaveClubSuccess());
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(addSystemNotification({ message: error.request.statusText, notificationType: 'error' }));
    }
  }
}
