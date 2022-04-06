import { ModalState, ShowModalPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalState = {
  isShow: false,
  reactComponent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ShowModalPayload>) {
      state.isShow = true;
      state.reactComponent = action.payload;
    },
    closeModal(state) {
      state.reactComponent = null;
      state.isShow = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;