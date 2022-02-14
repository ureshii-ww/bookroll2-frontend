import React, { FC, useEffect } from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ThemeStyleType } from '../../../store/reducers/theme/types';
import { ReactComponent as SunSvg } from '../../../assets/svg/navbar-sun.svg';
import { ReactComponent as MoonSvg } from '../../../assets/svg/navbar-moon.svg';

const ThemeSwitch: FC = () => {
  const { setTheme } = useActions();
  const currentTheme = useAppSelector(state => state.theme.themeStyle);

  const switchTheme = () => {
    const newTheme: ThemeStyleType = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('themeStyle', newTheme);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <TransparentButton className="navbar__button" onClick={switchTheme}>
      {currentTheme === 'light' && <SunSvg />}
      {currentTheme === 'dark' && <MoonSvg />}
    </TransparentButton>
  );
};

export default ThemeSwitch;