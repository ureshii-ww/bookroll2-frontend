import { LoadingModalAction, LoadingModalEnum, LoadingModalState } from './types';

const initialState: LoadingModalState = {
  isLoadingModal: false,
};

export default function loadingModalReducer(state = initialState, action: LoadingModalAction): LoadingModalState {
  switch (action.type) {
    case LoadingModalEnum.SET_LOADING_MODAL_TRUE:
      return { isLoadingModal: action.payload };
    case LoadingModalEnum.SET_LOADING_MODAL_FALSE:
      return { isLoadingModal: action.payload };
    default:
      return state;
  }
}
