import { LoadingTabState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LoadingTabState = {
  isLoadingTab: false,
};

const loadingTabSlice = createSlice({
  name: 'loadingTab',
  initialState,
  reducers: {
    startLoadingTab(state) {
      state.isLoadingTab = true;
    },
    finishLoadingTab(state) {
      state.isLoadingTab = false;
    },
  },
});

export const { startLoadingTab, finishLoadingTab } = loadingTabSlice.actions;
export default loadingTabSlice.reducer;
