import {
  AuthState,
  JoinClubPayload,
  LeaveClubPayload,
  LoginPayload,
  SetIsAuthPayload,
  SetUserDataPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const isAuth = JSON.parse(localStorage.getItem('isAuth') || '{}');
const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const initialState: AuthState = {
  isAuth: typeof isAuth === 'object' ? false : isAuth,
  userData: Object.keys(userData).length === 0 ? null : userData,
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
    login(state, action: PayloadAction<LoginPayload>) {},
    logout(state) {
      state.isAuth = false;
      state.userData = null;
    },
    joinClub(state, action: PayloadAction<JoinClubPayload>) {},
    leaveClub(state, action: PayloadAction<LeaveClubPayload>) {},
  },
});

export const { setIsAuth, setUserData, login, logout, leaveClub, joinClub } = authSlice.actions;
export default authSlice.reducer;