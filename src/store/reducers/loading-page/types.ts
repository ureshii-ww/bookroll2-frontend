export interface LoadingPageState {
  isLoadingPage: boolean;
}

export enum LoadingPageEnum {
  SET_LOADING_PAGE_FALSE = 'SET_LOADING_PAGE_FALSE',
  SET_LOADING_PAGE_TRUE = 'SET_LOADING_PAGE_TRUE',
}

export interface SetLoadingPageFalseAction {
  type: LoadingPageEnum.SET_LOADING_PAGE_FALSE;
  payload: false;
}

export interface SetLoadingPageTrueAction {
  type: LoadingPageEnum.SET_LOADING_PAGE_TRUE;
  payload: true;
}

export type LoadingPageAction = SetLoadingPageTrueAction | SetLoadingPageFalseAction;
