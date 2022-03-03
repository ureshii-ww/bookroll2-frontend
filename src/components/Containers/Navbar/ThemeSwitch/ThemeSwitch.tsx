import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { ReactComponent as SunSvg } from '../../../../assets/svg/navbar-sun.svg';
import { ReactComponent as MoonSvg } from '../../../../assets/svg/navbar-moon.svg';
import useThemeSwitch from './useThemeSwitch';

const ThemeSwitch: FC = ({children}) => {
  const { currentTheme, switchTheme } = useThemeSwitch();

  return (
    <TransparentButton className="transparent-button--main navbar__button navbar__theme-switch" onClick={switchTheme}>
      {currentTheme === 'light' && <SunSvg />}
      {currentTheme === 'dark' && <MoonSvg />}
      <span>{children}</span>
    </TransparentButton>
  );
};

export default ThemeSwitch;
