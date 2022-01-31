export interface EventState {
  notification: Notification | null,
  isLoading: boolean
}

export enum EventActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_NOTIFICATION = 'SET_NOTIFICATION'
}

export interface SetIsLoadingAction {
  type: EventActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetNotification {
  type: EventActionEnum.SET_NOTIFICATION;
  payload: Notification;
}

export type EventAction =
  SetIsLoadingAction |
  SetNotification;