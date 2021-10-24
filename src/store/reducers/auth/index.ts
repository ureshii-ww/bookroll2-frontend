import { AuthAction, AuthActionEnum, AuthState } from './types';

const isAuth = JSON.parse(localStorage.getItem('isAuth') || '{}');
const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState: AuthState = {
  isAuth: typeof isAuth === 'object' ? false : isAuth,
  userData: Object.keys(userData).length === 0 ? null : userData,
  // accessToken: null
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return {...state, isAuth: action.payload}

    case AuthActionEnum.SET_USER_DATA:
      return {...state, userData: action.payload}

    // case AuthActionEnum.SET_ACCESS_TOKEN:
    //   return {...state, accessToken: action.payload}

    default:
      return state;
  }
}