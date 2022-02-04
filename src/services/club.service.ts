import $api from '../api';
import { ClubProfileInfo } from '../models/club-profile-info';
import { UserData } from '../models/user-data';

const CLUB_PREFIX = 'club/';

const ClubService = {
  getClubProfileInfo: async (clubUrl: string) => {
    return $api.get<ClubProfileInfo>(CLUB_PREFIX + clubUrl + '/info')
  },

  createClub: async (clubname: string) => {
    return $api.post<UserData>(CLUB_PREFIX + 'create', { clubname });
  },

  joinClub: async (clubUrl: string) => {
    return $api.post<UserData>(CLUB_PREFIX + clubUrl + '/join');
  },

  leaveClub: async (clubUrl: string) => {
    return $api.post<UserData>(CLUB_PREFIX + clubUrl + '/leave');
  }
}

export default ClubService;