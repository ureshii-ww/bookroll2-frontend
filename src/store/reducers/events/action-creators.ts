import {
  DestroyNotification,
  EventActionEnum,
  SetIsLoadingPageAction,
  SetIsLoadingTabAction,
  SetNotifications,
} from './types';
import { Notification } from '../../../models/notification';

export const EventActionCreators = {
  setIsLoadingPage: (value: boolean): SetIsLoadingPageAction => ({
    type: EventActionEnum.SET_IS_LOADING_PAGE,
    payload: value,
  }),
  setIsLoadingTab: (value: boolean): SetIsLoadingTabAction => ({
    type: EventActionEnum.SET_IS_LOADING_TAB,
    payload: value,
  }),
  setNotifications: (notifications: Notification[]): SetNotifications => ({
    type: EventActionEnum.SET_NOTIFICATIONS,
    payload: notifications,
  }),
};
