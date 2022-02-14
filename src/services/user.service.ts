import $api from '../api';
import { UserProfileInfo } from '../models/user-profile-info';
import { BookData } from '../models/book-data';
import { UserData } from '../models/user-data';
import { UserAccountInfo } from '../models/user-account-info';

const USER_PREFIX = 'user/';

const UserService = {
  getUserProfileInfo: async (userUrl: string) => {
    return $api.get<UserProfileInfo>(USER_PREFIX + userUrl + '/info');
  },

  getUserBooks: async (userUrl: string, page: number, size: number) => {
    return $api.get<BookData[]>(`${USER_PREFIX}${userUrl}/books?page=${page}&size=${size}`);
  },

  deleteBook: async (userUrl: string, index: number) => {
    return $api.post<string>(`${USER_PREFIX}${userUrl}/deleteBook`, { index });
  },

  updateInfo: async (userUrl: string, username: string, color: string, emoji: string) => {
    return $api.post<UserData>(`${USER_PREFIX}${userUrl}/updateInfo`, { username, color, emoji });
  },

  getAccountInfo: async (userUrl: string) => {
    return $api.get<UserAccountInfo>(`${USER_PREFIX}${userUrl}/accountInfo`);
  },

  updatePassword: async (userUrl: string, oldPassword: string, newPassword: string) => {
    return $api.post<string>(`${USER_PREFIX}${userUrl}/updatePassword`, {oldPassword, newPassword});
  },
};

export default UserService;
