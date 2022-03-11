import { ThemeAction, ThemeActionEnum, ThemeState } from './types';

const localStorageThemeStyle = localStorage.getItem('themeStyle');
const themeStyle =
  localStorageThemeStyle === 'light' || localStorageThemeStyle === 'dark' ? localStorageThemeStyle : 'light';

const initialState: ThemeState = {
  themeStyle: themeStyle,
};

export default function themeReducer(state = initialState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case ThemeActionEnum.SET_THEME:
      return { ...state, themeStyle: action.payload };
    default:
      return state;
  }
}
