import { UserProfileAction, UserProfileActionsEnum, UserProfileState } from './types';

const initialState: UserProfileState = {
  url: null,
  info: {
    data: null,
    loading: false,
  },
  books: {
    data: [],
    loading: false,
  },
};

export default function userProfileReducer(state = initialState, action: UserProfileAction): UserProfileState {
  switch (action.type) {
    case UserProfileActionsEnum.LOAD_USER_PROFILE_INFO: {
      return {
        ...state,
        url: action.payload,
        info: {
          data: null,
          loading: true,
        },
      };
    }

    case UserProfileActionsEnum.LOAD_USER_PROFILE_INFO_SUCCESS: {
      return {
        ...state,
        info: {
          data: action.payload,
          loading: false,
        },
      };
    }

    case UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS: {
      return {
        ...state,
        books: {
          ...state.books,
          loading: true,
        },
      };
    }

    case UserProfileActionsEnum.LOAD_USER_PROFILE_BOOKS_SUCCESS: {
      return {
        ...state,
        books: {
          data: state.books.data.concat(action.payload),
          loading: false,
        },
      };
    }

    default:
      return state;
  }
}
