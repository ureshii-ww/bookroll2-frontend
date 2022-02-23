import { AuthActionCreators } from './auth/action-creators';
import { NotificationsActionCreators } from './notifications/action-creators';
import { ThemeActionCreators } from './theme/action-creators';
import { ModalActionCreators } from './modal/action-creators';
import { LoadingTabActionCreators } from './loading-tab/action-creators';
import { LoadingPageActionCreators } from './loading-page/action-creators';
import { LoadingModalActionCreators } from './loading-modal/action-creators';
import { LoadingPostActionCreators } from './loading-post/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...NotificationsActionCreators,
  ...ThemeActionCreators,
  ...ModalActionCreators,
  ...LoadingTabActionCreators,
  ...LoadingPageActionCreators,
  ...LoadingModalActionCreators,
  ...LoadingPostActionCreators,
};