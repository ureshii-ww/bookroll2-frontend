export interface BubbleState {
  isShow: boolean;
  reactComponent: JSX.Element | null;
  wrapperClass: string | null;
}

export enum BubbleActionEnum {
  SHOW_BUBBLE = 'SHOW_BUBBLE',
  CLOSE_BUBBLE = 'CLOSE_BUBBLE',
}

export interface ShowBubbleAction {
  type: BubbleActionEnum.SHOW_BUBBLE;
  payload: {
    reactComponent: JSX.Element;
    wrapperClass: string | null;
  };
}

export interface CloseBubbleAction {
  type: BubbleActionEnum.CLOSE_BUBBLE;
  payload: false;
}

export type BubbleAction = ShowBubbleAction | CloseBubbleAction;