export interface LoadingPostState {
  isLoadingPost: boolean;
}

export enum LoadingPostEnum {
  SET_LOADING_POST_FALSE = 'SET_LOADING_POST_FALSE',
  SET_LOADING_POST_TRUE = 'SET_LOADING_POST_TRUE',
}

export interface SetLoadingPostFalseAction {
  type: LoadingPostEnum.SET_LOADING_POST_FALSE;
  payload: false;
}

export interface SetLoadingPostTrueAction {
  type: LoadingPostEnum.SET_LOADING_POST_TRUE;
  payload: true;
}

export type LoadingPostAction = SetLoadingPostTrueAction | SetLoadingPostFalseAction;
