import $api from '../api';
import { ClubProfileInfo } from '../models/club-profile-info';

const CLUB_PREFIX = 'club/';

const ClubService = {
  getClubProfileInfo: async (clubUrl: string) => {
    return $api.get<ClubProfileInfo>(CLUB_PREFIX + clubUrl + '/info')
  }
}

export default ClubService;