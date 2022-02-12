import {
  EventActionEnum,
  SetIsLoadingPageAction,
  SetIsLoadingTabAction,
} from './types';

export const EventActionCreators = {
  setIsLoadingPage: (value: boolean): SetIsLoadingPageAction => ({
    type: EventActionEnum.SET_IS_LOADING_PAGE,
    payload: value,
  }),
  setIsLoadingTab: (value: boolean): SetIsLoadingTabAction => ({
    type: EventActionEnum.SET_IS_LOADING_TAB,
    payload: value,
  }),
};
