import { CloseModalAction, ModalActionEnum, ShowModalAction } from './types';

export const ModalActionCreators = {
  showModal: (component: JSX.Element): ShowModalAction => ({
    type: ModalActionEnum.SHOW_MODAL,
    payload: component,
  }),
  closeModal: (): CloseModalAction => ({
    type: ModalActionEnum.CLOSE_MODAL,
    payload: false,
  }),
};
