import $api from '../api';
import { UserData } from '../models/user-data';

const AUTH_PREFIX = 'auth/';

const login = async (email: string, password: string) => {
  return $api.post<UserData>(AUTH_PREFIX + 'login', {email, password})
}

const logout = async () => {
  return $api.get(AUTH_PREFIX + 'logout')
}

const register = async (username: string, email: string, password: string) => {
  return $api.post(AUTH_PREFIX + 'register', {username, email, password})
}

export default {
  login,
  logout,
  register
}