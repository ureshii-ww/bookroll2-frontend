import { LoadingPageAction, LoadingPageEnum, LoadingPageState } from './types';

const initialState: LoadingPageState = {
  isLoadingPage: false,
};

export default function loadingPageReducer(state = initialState, action: LoadingPageAction): LoadingPageState {
  switch (action.type) {
    case LoadingPageEnum.SET_LOADING_PAGE_TRUE:
      return { isLoadingPage: action.payload };
    case LoadingPageEnum.SET_LOADING_PAGE_FALSE:
      return { isLoadingPage: action.payload };
    default:
      return state;
  }
}
