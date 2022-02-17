import { ModalAction, ModalActionEnum, ModalState } from './types';

const initialState: ModalState = {
  isShow: false,
  reactComponent: null
}

export default function ModalReducer(state = initialState, action: ModalAction) {
  switch (action.type) {
    case ModalActionEnum.CLOSE_MODAL:
      return initialState;
    case ModalActionEnum.SHOW_MODAL:
      return {isShow: true, reactComponent: action.payload};
    default:
      return state;
  }
}