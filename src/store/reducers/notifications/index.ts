import { NotificationsActionsEnum, NotificationsState } from './types';
import { NotificationsAction } from './types';

const initialState: NotificationsState = {
  notifications: [],
};

export default function NotificationsReducer(state = initialState, action: NotificationsAction): NotificationsState {
  switch (action.type) {
    case NotificationsActionsEnum.SET_NOTIFICATION:
      return {
        notifications: [
          ...state.notifications.filter(notification => notification.id !== action.payload.id),
          action.payload,
        ],
      };
    case NotificationsActionsEnum.DELETE_NOTIFICATION:
      return {
        notifications: state.notifications.filter(notification => notification.id !== action.payload),
      };
    default:
      return state;
  }
}
