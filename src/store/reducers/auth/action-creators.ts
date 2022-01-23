import { AuthActionEnum, SetIsAuthAction, SetUserDataAction } from './types';
import { UserData } from '../../../models/user-data';
import { AppDispatch } from '../../index';
import AuthService from '../../../services/auth.service';
import $api from '../../../api';

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetIsAuthAction => ({ type: AuthActionEnum.SET_IS_AUTH, payload: auth }),
  setUserData: (userData: UserData | null): SetUserDataAction => ({
    type: AuthActionEnum.SET_USER_DATA,
    payload: userData
  }),
  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.login(email, password);
      console.log('im here')
      localStorage.setItem('isAuth', JSON.stringify(true));
      dispatch(AuthActionCreators.setIsAuth(true));
      localStorage.setItem('userData', JSON.stringify(response.data));
      dispatch(AuthActionCreators.setUserData(response.data));
      $api.defaults.headers.common['Authorization'] = `Bearer ${response.headers['x-access-token']}`;
    } catch (error: any) {
      console.log(error.response?.data?.message);
      throw error;
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('isAuth');
      dispatch(AuthActionCreators.setIsAuth(false));
      localStorage.removeItem('userData');
      dispatch(AuthActionCreators.setUserData(null));
      $api.defaults.headers.common['Authorization'] = '';
    } catch (error: any) {
      console.log(error.response?.data?.message);
      throw error;
    }
  }
}