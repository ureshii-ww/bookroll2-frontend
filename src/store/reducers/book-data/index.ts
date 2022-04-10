import { BookDataState, LoadBookDataPayload, LoadBookDataSuccessPayload } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BookDataState = {
  data: null,
  isLoading: false,
};

const bookDataSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    loadBookData(state, action: PayloadAction<LoadBookDataPayload>) {
      state.isLoading = true;
    },
    loadBookDataSuccess(state, action: PayloadAction<LoadBookDataSuccessPayload>) {
      state.data = action.payload;
      state.isLoading = false;
    },
    loadBookDataFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { loadBookData, loadBookDataFailure, loadBookDataSuccess } = bookDataSlice.actions;
export default bookDataSlice.reducer;
