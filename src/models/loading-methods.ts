import { SetLoadingPageFalseAction, SetLoadingPageTrueAction } from '../store/reducers/loading-page/types';
import { SetLoadingModalFalseAction, SetLoadingModalTrueAction } from '../store/reducers/loading-modal/types';
import { SetLoadingPostFalseAction, SetLoadingPostTrueAction } from '../store/reducers/loading-post/types';

export default interface LoadingMethods {
  methodTrue:
    () => SetLoadingPageTrueAction
    | SetLoadingModalTrueAction
    | SetLoadingPostTrueAction;

  methodFalse:
    () => SetLoadingPageFalseAction
    | SetLoadingModalFalseAction
    | SetLoadingPostFalseAction;
}