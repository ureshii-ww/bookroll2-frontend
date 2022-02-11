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

const deleteBook = async (userUrl: string, index: number) => {
  return $api.post<string>(`${USER_PREFIX}${userUrl}/deleteBook`, {index})
}

const UserService = {
  getUserProfileInfo,
  getUserBooks,
  deleteBook
}

export default UserService;