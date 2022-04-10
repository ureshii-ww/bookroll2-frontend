export type ThemeStyleType = 'light' | 'dark';

export interface ThemeState {
  themeStyle: ThemeStyleType;
}

export type SetThemePayload = ThemeStyleType;