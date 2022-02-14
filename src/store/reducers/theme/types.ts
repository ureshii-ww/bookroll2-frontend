export type ThemeStyleType = 'light' | 'dark';

export interface ThemeState {
  themeStyle: ThemeStyleType;
}

export enum ThemeActionEnum {
  SET_THEME = 'SET_THEME',
}

export interface SetThemeAction {
  type: ThemeActionEnum.SET_THEME;
  payload: ThemeStyleType;
}

export type ThemeAction = SetThemeAction;