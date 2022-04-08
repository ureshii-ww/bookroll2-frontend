import { ConfirmRandomBookPayload, LoadRandomBookSuccessPayload, RandomBookState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RandomBookState = {
  data: null,
  isLoading: false,
  isConfirming: false,
};

const randomBookSlice = createSlice({
  name: 'randomBook',
  initialState,
  reducers: {
    loadRandomBook(state) {
      state.isLoading = true;
    },
    loadRandomBookSuccess(state, action: PayloadAction<LoadRandomBookSuccessPayload>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    loadRandomBookFailure(state) {
      state.isLoading = false;
    },
    confirmRandomBook(state, action: PayloadAction<ConfirmRandomBookPayload>) {
      state.isConfirming = true;
    },
    confirmRandomBookSuccess(state) {
      state.isConfirming = false;
    },
    confirmRandomBookFailure(state) {
      state.isConfirming = false;
    },
  },
});

export const {
  loadRandomBook,
  loadRandomBookSuccess,
  loadRandomBookFailure,
  confirmRandomBook,
  confirmRandomBookSuccess,
  confirmRandomBookFailure,
} = randomBookSlice.actions;

const randomBookReducer = randomBookSlice.reducer;
export default randomBookReducer;