import auth from './auth';
import notifications from './notifications';
import theme from './theme';
import modal from './modal';
import bubble from './bubble';
import userProfile from './user-profile';
import systemNotifications from './system-notifications';
import clubProfile from './club-profile';
import loadingTab from './loading-tab';
import clubSettings from './club-settings';
import userSettings from './user-settings';
import randomBook from './random-book';
import clubWheel from './club-wheel';
import bookData from './book-data';

const reducers =  {
  auth,
  notifications,
  theme,
  modal,
  bubble,
  userProfile,
  clubProfile,
  clubSettings,
  userSettings,
  randomBook,
  clubWheel,
  bookData,
  systemNotifications,
  loadingTab
};

export default reducers;