import { SetThemePayload, ThemeState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localStorageThemeStyle = localStorage.getItem('themeStyle');
const themeStyle =
  localStorageThemeStyle === 'light' || localStorageThemeStyle === 'dark' ? localStorageThemeStyle : 'light';

const initialState: ThemeState = {
  themeStyle: themeStyle,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<SetThemePayload>) {
      state.themeStyle = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
