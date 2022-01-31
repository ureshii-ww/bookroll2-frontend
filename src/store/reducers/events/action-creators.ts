import { EventActionEnum, SetIsLoadingAction, SetNotification } from './types';

export const EventActionCreators = {
  setIsLoading: (value: boolean): SetIsLoadingAction => ({type: EventActionEnum.SET_IS_LOADING, payload: value}),
  setNotification: (notification: Notification): SetNotification => ({
    type: EventActionEnum.SET_NOTIFICATION,
    payload: notification
  })
}