import { AuthActionEnum, SetIsAuthAction, SetUserDataAction } from './types';
import { UserData } from '../../../models/user-data';
import { AppDispatch } from '../../index';
import AuthService from '../../../services/auth.service';
import $api, { setUserUrl } from '../../../api';
import ClubService from '../../../services/club.service';
import { LoadingPageActionCreators } from '../loading-page/action-creators';
import { ThemeActionCreators } from '../theme/action-creators';

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetIsAuthAction => ({ type: AuthActionEnum.SET_IS_AUTH, payload: auth }),
  setUserData: (userData: UserData | null): SetUserDataAction => ({
    type: AuthActionEnum.SET_USER_DATA,
    payload: userData,
  }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('isAuth', JSON.stringify(true));
      dispatch(AuthActionCreators.setIsAuth(true));
      localStorage.setItem('userData', JSON.stringify(response.data));
      dispatch(AuthActionCreators.setUserData(response.data));
      setUserUrl(response.data.url);
      $api.defaults.headers.common['Authorization'] = `Bearer ${response.headers['x-access-token']}`;
    } catch (error: any) {
      throw error;
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('isAuth');
      dispatch(AuthActionCreators.setIsAuth(false));
      localStorage.removeItem('userData');
      dispatch(AuthActionCreators.setUserData(null));
      localStorage.setItem('themeStyle', 'light');
      dispatch(ThemeActionCreators.setTheme('light'));
      document.body.classList.remove('dark');
      $api.defaults.headers.common['Authorization'] = '';
      setUserUrl('');
    } catch (error: any) {
      throw error;
    }
  },
  joinClub: (clubUrl: string) => async (dispatch: AppDispatch) => {
    dispatch(LoadingPageActionCreators.setLoadingPageTrue());
    try {
      const response = await ClubService.joinClub(clubUrl);
      localStorage.setItem('userData', JSON.stringify(response.data));
      dispatch(AuthActionCreators.setUserData(response.data));
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(LoadingPageActionCreators.setLoadingPageFalse());
    }
  },
  leaveClub: (clubUrl: string) => async (dispatch: AppDispatch) => {
    dispatch(LoadingPageActionCreators.setLoadingPageTrue());
    try {
      const response = await ClubService.leaveClub(clubUrl);
      localStorage.setItem('userData', JSON.stringify(response.data));
      dispatch(AuthActionCreators.setUserData(response.data));
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(LoadingPageActionCreators.setLoadingPageFalse());
    }
  }
};
