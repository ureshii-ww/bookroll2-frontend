import { LoadingPostAction, LoadingPostEnum, LoadingPostState } from './types';

const initialState: LoadingPostState = {
  isLoadingPost: false,
};

export default function loadingPostReducer(state = initialState, action: LoadingPostAction): LoadingPostState {
  switch (action.type) {
    case LoadingPostEnum.SET_LOADING_POST_TRUE:
      return { isLoadingPost: action.payload };
    case LoadingPostEnum.SET_LOADING_POST_FALSE:
      return { isLoadingPost: action.payload };
    default:
      return state;
  }
}
