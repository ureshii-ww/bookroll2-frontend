export interface EventState {
  isLoadingPage: boolean;
  isLoadingTab: boolean;
}

export enum EventActionEnum {
  SET_IS_LOADING_PAGE = 'SET_IS_LOADING_PAGE',
  SET_IS_LOADING_TAB = 'SET_IS_LOADING_TAB',
}

export interface SetIsLoadingPageAction {
  type: EventActionEnum.SET_IS_LOADING_PAGE;
  payload: boolean;
}

export interface SetIsLoadingTabAction {
  type: EventActionEnum.SET_IS_LOADING_TAB;
  payload: boolean;
}

export type EventAction = SetIsLoadingPageAction | SetIsLoadingTabAction;
