import { EventAction, EventActionEnum, EventState } from './types';

const initialState: EventState = {
  notification: null,
  isLoading: false
}

export default function eventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnum.SET_NOTIFICATION:
      return {...state, notification: action.payload}
    case EventActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state;
  }
}