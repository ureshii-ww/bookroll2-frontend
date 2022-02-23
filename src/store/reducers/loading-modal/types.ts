export interface LoadingModalState {
  isLoadingModal: boolean;
}

export enum LoadingModalEnum {
  SET_LOADING_MODAL_FALSE = 'SET_LOADING_MODAL_FALSE',
  SET_LOADING_MODAL_TRUE = 'SET_LOADING_MODAL_TRUE',
}

export interface SetLoadingModalFalseAction {
  type: LoadingModalEnum.SET_LOADING_MODAL_FALSE;
  payload: false;
}

export interface SetLoadingModalTrueAction {
  type: LoadingModalEnum.SET_LOADING_MODAL_TRUE;
  payload: true;
}

export type LoadingModalAction = SetLoadingModalTrueAction | SetLoadingModalFalseAction;
