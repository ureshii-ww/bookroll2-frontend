import { SetThemeAction, ThemeActionEnum, ThemeStyleType } from './types';

export const ThemeActionCreators = {
  setTheme: (value: ThemeStyleType): SetThemeAction => ({
    type: ThemeActionEnum.SET_THEME,
    payload: value
  }),
};