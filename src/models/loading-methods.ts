import { SetLoadingPageFalseAction, SetLoadingPageTrueAction } from '../store/reducers/loading-page/types';
import { SetLoadingTabFalseAction, SetLoadingTabTrueAction } from '../store/reducers/loading-tab/types';
import { SetLoadingModalFalseAction, SetLoadingModalTrueAction } from '../store/reducers/loading-modal/types';
import { SetLoadingPostFalseAction, SetLoadingPostTrueAction } from '../store/reducers/loading-post/types';

export default interface LoadingMethods {
  methodTrue:
    () => SetLoadingPageTrueAction
    | SetLoadingTabTrueAction
    | SetLoadingModalTrueAction
    | SetLoadingPostTrueAction;

  methodFalse:
    () => SetLoadingPageFalseAction
    | SetLoadingTabFalseAction
    | SetLoadingModalFalseAction
    | SetLoadingPostFalseAction;
}