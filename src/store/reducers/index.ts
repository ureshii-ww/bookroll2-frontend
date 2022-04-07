import auth from './auth';
import notifications from './notifications';
import theme from './theme';
import modal from './modal';
import loadingPage from './loading-page';
import loadingModal from './loading-page';
import loadingPost from './loading-post';
import bubble from './bubble';
import userProfile from './user-profile';
import systemNotifications from './system-notifications';
import clubProfile from './club-profile';
import loadingTab from './loading-tab';
import clubSettings from './club-settings';
import userSettings from './user-settings';

const reducers =  {
  auth,
  notifications,
  theme,
  modal,
  loadingPage,
  loadingModal,
  loadingPost,
  bubble,
  userProfile,
  clubProfile,
  clubSettings,
  userSettings,
  systemNotifications,
  loadingTab
};

export default reducers;