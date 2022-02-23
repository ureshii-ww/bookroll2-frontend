export interface LoadingTabState {
  isLoadingTab: boolean;
}

export enum LoadingTabEnum {
  SET_LOADING_TAB_FALSE = 'SET_LOADING_TAB_FALSE',
  SET_LOADING_TAB_TRUE = 'SET_LOADING_TAB_TRUE',
}

export interface SetLoadingTabFalseAction {
  type: LoadingTabEnum.SET_LOADING_TAB_FALSE;
  payload: false;
}

export interface SetLoadingTabTrueAction {
  type: LoadingTabEnum.SET_LOADING_TAB_TRUE;
  payload: true;
}

export type LoadingTabAction = SetLoadingTabTrueAction | SetLoadingTabFalseAction;
