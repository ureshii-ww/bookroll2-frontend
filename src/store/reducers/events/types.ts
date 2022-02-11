import { Notification } from '../../../models/notification';

export interface EventState {
  notifications: Notification[];
  isLoadingPage: boolean;
  isLoadingTab: boolean;
}

export enum EventActionEnum {
  SET_IS_LOADING_PAGE = 'SET_IS_LOADING_PAGE',
  SET_IS_LOADING_TAB = 'SET_IS_LOADING_TAB',
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  CREATE_NOTIFICATIONS = 'CREATE_NOTIFICATIONS',
  DESTROY_NOTIFICATION = 'DESTROY_NOTIFICATION',
}

export interface SetIsLoadingPageAction {
  type: EventActionEnum.SET_IS_LOADING_PAGE;
  payload: boolean;
}

export interface SetIsLoadingTabAction {
  type: EventActionEnum.SET_IS_LOADING_TAB;
  payload: boolean;
}

export interface SetNotifications {
  type: EventActionEnum.SET_NOTIFICATIONS;
  payload: Notification[];
}

export interface CreateNotification {
  type: EventActionEnum.CREATE_NOTIFICATIONS;
  payload: Notification;
}

export interface DestroyNotification {
  type: EventActionEnum.DESTROY_NOTIFICATION;
  payload: Notification;
}

export type EventAction =
  | SetIsLoadingPageAction
  | SetNotifications
  | SetIsLoadingTabAction
  | CreateNotification
  | DestroyNotification;
