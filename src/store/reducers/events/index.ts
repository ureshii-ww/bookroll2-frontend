import { EventAction, EventActionEnum, EventState } from './types';

const initialState: EventState = {
  notifications: [],
  isLoadingPage: false,
  isLoadingTab: false
}

export default function eventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnum.SET_NOTIFICATIONS:
      return {...state, notifications: action.payload}
    case EventActionEnum.SET_IS_LOADING_PAGE:
      return {...state, isLoadingPage: action.payload}
    case EventActionEnum.SET_IS_LOADING_TAB:
      return {...state, isLoadingTab: action.payload}
    default:
      return state;
  }
}