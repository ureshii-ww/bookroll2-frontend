import $api from '../api';
import { UserProfileInfo } from '../models/user-profile-info';
import { RandomBookData } from '../models/random-book-data';

const USER_PREFIX = 'user/'

const getUserProfileInfo = async (userUrl: string) => {
  return $api.get<UserProfileInfo>(USER_PREFIX + userUrl + '/info')
}

const getUserBooks = async (userUrl: string, page: number, size: number) => {
  return $api.get<RandomBookData[]>(`${USER_PREFIX}${userUrl}/books?page=${page}&size=${size}`, )
}

const UserService = {
  getUserProfileInfo,
  getUserBooks
}

export default UserService;