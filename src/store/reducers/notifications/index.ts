import { NotificationsActionsEnum, NotificationsState } from './types';
import { NotificationsAction } from './types';

const initialState: NotificationsState = {
  notifications: [],
};

export default function NotificationsReducer(state = initialState, action: NotificationsAction): NotificationsState {
  switch (action.type) {
    case NotificationsActionsEnum.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}
