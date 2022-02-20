import { useActions } from '../../../hooks/useActions';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ThemeStyleType } from '../../../store/reducers/theme/types';
import { useEffect } from 'react';

const useThemeSwitch = () => {
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

  return { currentTheme, switchTheme };
};

export default useThemeSwitch;