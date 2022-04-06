import { AuthActionCreators } from './auth/action-creators';
import { NotificationsActionCreators } from './notifications/action-creators';
import { ThemeActionCreators } from './theme/action-creators';
import { ModalActionCreators } from './modal/action-creators';
import { LoadingPageActionCreators } from './loading-page/action-creators';
import { LoadingModalActionCreators } from './loading-modal/action-creators';
import { LoadingPostActionCreators } from './loading-post/action-creators';
import { BubbleActionCreators } from './bubble/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...NotificationsActionCreators,
  ...ThemeActionCreators,
  ...ModalActionCreators,
  ...LoadingPageActionCreators,
  ...LoadingModalActionCreators,
  ...LoadingPostActionCreators,
  ...BubbleActionCreators,
};