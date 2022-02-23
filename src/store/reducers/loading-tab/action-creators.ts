import { LoadingTabEnum, SetLoadingTabFalseAction, SetLoadingTabTrueAction } from './types';

export const LoadingTabActionCreators = {
  setLoadingTabTrue: (): SetLoadingTabTrueAction => ({
    type: LoadingTabEnum.SET_LOADING_TAB_TRUE,
    payload: true,
  }),
  setLoadingTabFalse: (): SetLoadingTabFalseAction => ({
    type: LoadingTabEnum.SET_LOADING_TAB_FALSE,
    payload: false,
  }),
};
