import { UserProfileInfo } from './user-profile-info';

export type UserSettingsInfoData = Pick<UserProfileInfo, 'username' | 'emoji' | 'color'>;
