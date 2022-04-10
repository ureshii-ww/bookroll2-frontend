import {
  AuthState, CreateClubPayload,
  JoinClubPayload,
  LeaveClubPayload,
  LoginPayload,
  RegisterPayload,
  SetIsAuthPayload,
  SetUserDataPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const isAuth = JSON.parse(localStorage.getItem('isAuth') || '{}');
const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState: AuthState = {
  isAuth: typeof isAuth === 'object' ? false : isAuth,
  userData: Object.keys(userData).length === 0 ? null : userData,
  isRegistering: false,
  isLoggingIn: false,
  isCreatingClub: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<SetIsAuthPayload>) {
      state.isAuth = action.payload;
    },
    setUserData(state, action: PayloadAction<SetUserDataPayload>) {
      state.userData = action.payload;
    },
    register(state, action: PayloadAction<RegisterPayload>) {
      state.isRegistering = true;
    },
    registerSuccess(state) {
      state.isRegistering = false;
    },
    registerFailure(state) {
      state.isRegistering = false;
    },
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLoggingIn = true;
    },
    loginSuccess(state) {
      state.isLoggingIn = false;
    },
    loginFailure(state) {
      state.isLoggingIn = false;
    },
    logout(state) {
      state.isAuth = false;
      state.userData = null;
    },
    joinClub(state, action: PayloadAction<JoinClubPayload>) {},
    leaveClub(state, action: PayloadAction<LeaveClubPayload>) {},
    createClub(state, action: PayloadAction<CreateClubPayload>) {},
  },
});

export const {
  setIsAuth,
  setUserData,
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
  logout,
  createClub,
  leaveClub,
  joinClub,
} = authSlice.actions;
export default authSlice.reducer;
