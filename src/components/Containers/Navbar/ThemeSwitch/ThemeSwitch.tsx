import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { ReactComponent as SunSvg } from '../../../../assets/svg/navbar-sun.svg';
import { ReactComponent as MoonSvg } from '../../../../assets/svg/navbar-moon.svg';
import { ReactComponent as StarsSvg } from '../../../../assets/svg/stars.svg';
import useThemeSwitch from './useThemeSwitch';
import './theme-switch.scss';

const ThemeSwitch: FC = ({children}) => {
  const { currentTheme, switchTheme } = useThemeSwitch();
  const mainClass = 'theme-switch';
  const classString = currentTheme === 'light' ? `${mainClass} ${mainClass}--light` : `${mainClass} ${mainClass}--dark`;

  return (
    <label className={classString} onClick={switchTheme} htmlFor="theme-switch-input">
      <input name="theme-switch-input" type="checkbox" checked={currentTheme === 'dark'} className={`${mainClass}__input`}/>
      <span className={`${mainClass}__toggle`}>
        <span className={`${mainClass}__indicator`}/>
        <span className={`${mainClass}__icon`}>
          {currentTheme === 'light' && <SunSvg />}
          {currentTheme === 'dark' && <StarsSvg />}
        </span>
      </span>
      {children}
    </label>
  );
};

export default ThemeSwitch;
