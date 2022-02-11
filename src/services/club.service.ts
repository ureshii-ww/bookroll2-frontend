import $api from '../api';
import { ClubProfileInfo } from '../models/club-profile-info';
import { UserData } from '../models/user-data';
import { ClubBooks } from '../models/club-books';

const CLUB_PREFIX = 'club/';

const ClubService = {
  getClubProfileInfo: (clubUrl: string) => {
    return $api.get<ClubProfileInfo>(CLUB_PREFIX + clubUrl + '/info');
  },

  createClub: (clubname: string) => {
    return $api.post<UserData>(CLUB_PREFIX + 'create', { clubname });
  },

  joinClub: (clubUrl: string) => {
    return $api.post<UserData>(CLUB_PREFIX + clubUrl + '/join');
  },

  leaveClub: (clubUrl: string) => {
    return $api.post<UserData>(CLUB_PREFIX + clubUrl + '/leave');
  },

  getClubBooks: (clubUrl: string) => {
    return $api.get<ClubBooks[]>(CLUB_PREFIX + clubUrl + '/books');
  },

  deleteClubBook: (clubUrl: string, userUrl: string, index: number) => {
    return $api.post<string>(CLUB_PREFIX + clubUrl + '/deleteBook', {
      userUrl,
      index,
    });
  },
};

export default ClubService;
