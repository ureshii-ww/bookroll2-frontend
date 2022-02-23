import { LoadingPostEnum, SetLoadingPostFalseAction, SetLoadingPostTrueAction } from './types';

export const LoadingPostActionCreators = {
  setLoadingPostTrue: (): SetLoadingPostTrueAction => ({
    type: LoadingPostEnum.SET_LOADING_POST_TRUE,
    payload: true,
  }),
  setLoadingPostFalse: (): SetLoadingPostFalseAction => ({
    type: LoadingPostEnum.SET_LOADING_POST_FALSE,
    payload: false,
  }),
};
