import {AuthActionCreators} from './auth/action-creators';
import { EventActionCreators } from './events/action-creators';
import { NotificationsActionCreators } from './notifications/action-creators';
import { ThemeActionCreators } from './theme/action-creators';
import { ModalActionCreators } from './modal/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
  ...NotificationsActionCreators,
  ...ThemeActionCreators,
  ...ModalActionCreators
}