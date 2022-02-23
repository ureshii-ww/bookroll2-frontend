import { LoadingModalEnum, SetLoadingModalFalseAction, SetLoadingModalTrueAction } from './types';

export const LoadingModalActionCreators = {
  setLoadingModalTrue: (): SetLoadingModalTrueAction => ({
    type: LoadingModalEnum.SET_LOADING_MODAL_TRUE,
    payload: true,
  }),
  setLoadingModalFalse: (): SetLoadingModalFalseAction => ({
    type: LoadingModalEnum.SET_LOADING_MODAL_FALSE,
    payload: false,
  }),
};
