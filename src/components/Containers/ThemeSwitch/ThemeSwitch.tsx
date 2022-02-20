import React, { FC } from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { ReactComponent as SunSvg } from '../../../assets/svg/navbar-sun.svg';
import { ReactComponent as MoonSvg } from '../../../assets/svg/navbar-moon.svg';
import useThemeSwitch from './useThemeSwitch';

const ThemeSwitch: FC = () => {
  const { currentTheme, switchTheme } = useThemeSwitch();

  return (
    <TransparentButton className="navbar__button" onClick={switchTheme}>
      {currentTheme === 'light' && <SunSvg />}
      {currentTheme === 'dark' && <MoonSvg />}
    </TransparentButton>
  );
};

export default ThemeSwitch;
