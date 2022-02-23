import { LoadingTabAction, LoadingTabEnum, LoadingTabState } from './types';

const initialState: LoadingTabState = {
  isLoadingTab: false,
};

export default function loadingTabReducer(state = initialState, action: LoadingTabAction): LoadingTabState {
  switch (action.type) {
    case LoadingTabEnum.SET_LOADING_TAB_TRUE:
      return { isLoadingTab: action.payload };
    case LoadingTabEnum.SET_LOADING_TAB_FALSE:
      return { isLoadingTab: action.payload };
    default:
      return state;
  }
}
