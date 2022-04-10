import { BubbleState, ShowBubblePayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BubbleState = {
  isShow: false,
  reactComponent: null,
  wrapperClass: null,
};

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    showBubble(state, action: PayloadAction<ShowBubblePayload>) {
      state.reactComponent = action.payload.reactComponent;
      state.wrapperClass = action.payload.wrapperClass;
      state.isShow = true;
    },
    closeBubble(state) {
      state.isShow = false;
      state.reactComponent = null;
      state.wrapperClass = '';
    }
  }
})

export const {showBubble, closeBubble} = bubbleSlice.actions;
export default bubbleSlice.reducer;