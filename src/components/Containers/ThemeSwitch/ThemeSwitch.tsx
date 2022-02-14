import React, { FC } from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ThemeStyleType } from '../../../store/reducers/theme/types';

const ThemeSwitch: FC = () => {
  const {setTheme} = useActions();
  const currentTheme = useAppSelector(state => state.theme.themeStyle)

  const switchTheme = () => {
    const newTheme: ThemeStyleType = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('themeStyle', newTheme);
    document.body.classList.toggle('dark');
  }

  return (
    <div>
      <TransparentButton onClick={switchTheme}>Switch Theme</TransparentButton>
    </div>
  );
};

export default ThemeSwitch;