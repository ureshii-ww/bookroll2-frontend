import $api from '../api';
import { UserProfileInfo } from '../models/user-profile-info';

const USER_PREFIX = 'user/'

const getUserProfileInfo = async (userUrl: string) => {
  return $api.get<UserProfileInfo>(USER_PREFIX + userUrl + '/info')
}

const UserService = {
  getUserProfileInfo
}

export default UserService;