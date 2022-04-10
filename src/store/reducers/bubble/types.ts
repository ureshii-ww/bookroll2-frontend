export interface BubbleState {
  isShow: boolean;
  reactComponent: JSX.Element | null;
  wrapperClass: string | null;
}

export type ShowBubblePayload = Pick<BubbleState, 'reactComponent' | 'wrapperClass'>;