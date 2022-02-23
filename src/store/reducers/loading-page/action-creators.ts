import { LoadingPageEnum, SetLoadingPageFalseAction, SetLoadingPageTrueAction } from './types';

export const LoadingPageActionCreators = {
  setLoadingPageTrue: (): SetLoadingPageTrueAction => ({
    type: LoadingPageEnum.SET_LOADING_PAGE_TRUE,
    payload: true,
  }),
  setLoadingPageFalse: (): SetLoadingPageFalseAction => ({
    type: LoadingPageEnum.SET_LOADING_PAGE_FALSE,
    payload: false,
  }),
};
