export interface ModalState {
  isShow: boolean;
  reactComponent: JSX.Element | null;
}

export enum ModalActionEnum {
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

export interface ShowModalAction {
  type: ModalActionEnum.SHOW_MODAL;
  payload: JSX.Element;
}

export interface CloseModalAction {
  type: ModalActionEnum.CLOSE_MODAL;
  payload: false;
}

export type ModalAction = ShowModalAction | CloseModalAction;