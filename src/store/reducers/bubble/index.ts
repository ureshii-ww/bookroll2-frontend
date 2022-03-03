import { BubbleAction, BubbleActionEnum, BubbleState } from './types';

const initialState: BubbleState = {
  isShow: false,
  reactComponent: null,
  wrapperClass: null,
};

export default function BubbleReducer(state = initialState, action: BubbleAction) {
  switch (action.type) {
    case BubbleActionEnum.CLOSE_BUBBLE:
      return initialState;
    case BubbleActionEnum.SHOW_BUBBLE:
      return { isShow: true, reactComponent: action.payload.reactComponent, wrapperClass: action.payload.wrapperClass };
    default:
      return state;
  }
}