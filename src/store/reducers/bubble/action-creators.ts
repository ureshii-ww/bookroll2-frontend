import { BubbleActionEnum, CloseBubbleAction, ShowBubbleAction } from './types';

export const BubbleActionCreators = {
  showBubble: (reactComponent: JSX.Element, wrapperClass?: string): ShowBubbleAction => {
    if (wrapperClass) {
      return {
        type: BubbleActionEnum.SHOW_BUBBLE,
        payload: {
          reactComponent,
          wrapperClass,
        },
      };
    } else {
      return {
        type: BubbleActionEnum.SHOW_BUBBLE,
        payload: {
          reactComponent,
          wrapperClass: null
        }
      };
    }
  },
  closeBubble: (): CloseBubbleAction => ({
    type: BubbleActionEnum.CLOSE_BUBBLE,
    payload: false,
  }),
};