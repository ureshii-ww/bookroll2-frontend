import { RequestTypes } from '../models/request-types';
import { useActions } from './useActions';
import LoadingMethods from '../models/loading-methods';

const useLoadingMethods = (type: RequestTypes): LoadingMethods => {
  const {
    setLoadingTabTrue,
    setLoadingTabFalse,
    setLoadingPageTrue,
    setLoadingPageFalse,
    setLoadingPostTrue,
    setLoadingPostFalse,
    setLoadingModalTrue,
    setLoadingModalFalse,
  } = useActions();

  switch (type) {
    case 'Page':
      return {
        methodTrue: setLoadingPageTrue,
        methodFalse: setLoadingPageFalse,
      };
    case 'Modal':
      return {
        methodTrue: setLoadingModalTrue,
        methodFalse: setLoadingModalFalse,
      };
    case 'Post':
      return {
        methodTrue: setLoadingPostTrue,
        methodFalse: setLoadingPostFalse,
      };
    case 'Tab':
      return {
        methodTrue: setLoadingTabTrue,
        methodFalse: setLoadingTabFalse,
      };
  }
};

export default useLoadingMethods;
