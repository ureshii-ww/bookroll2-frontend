import { NotificationsActionCreators } from './notifications/action-creators';
import { ThemeActionCreators } from './theme/action-creators';
import { LoadingPageActionCreators } from './loading-page/action-creators';
import { LoadingModalActionCreators } from './loading-modal/action-creators';
import { LoadingPostActionCreators } from './loading-post/action-creators';
import { BubbleActionCreators } from './bubble/action-creators';

export const allActionCreators = {
  ...NotificationsActionCreators,
  ...ThemeActionCreators,
  ...LoadingPageActionCreators,
  ...LoadingModalActionCreators,
  ...LoadingPostActionCreators,
  ...BubbleActionCreators,
};