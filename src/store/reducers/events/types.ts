export interface EventState {
  notification: Notification | null,
  isLoadingPage: boolean,
  isLoadingTab: boolean
}

export enum EventActionEnum {
  SET_IS_LOADING_PAGE = 'SET_IS_LOADING_PAGE',
  SET_IS_LOADING_TAB = 'SET_IS_LOADING_TAB',
  SET_NOTIFICATION = 'SET_NOTIFICATION'
}

export interface SetIsLoadingPageAction {
  type: EventActionEnum.SET_IS_LOADING_PAGE;
  payload: boolean;
}

export interface SetIsLoadingTabAction {
  type: EventActionEnum.SET_IS_LOADING_TAB;
  payload: boolean;
}

export interface SetNotification {
  type: EventActionEnum.SET_NOTIFICATION;
  payload: Notification;
}

export type EventAction =
  SetIsLoadingPageAction |
  SetNotification |
  SetIsLoadingTabAction;