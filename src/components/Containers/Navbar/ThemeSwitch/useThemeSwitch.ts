import { useAppSelector } from '../../../../hooks/useAppSelector';
import { ThemeStyleType } from '../../../../store/reducers/theme/types';
import { useEffect } from 'react';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { setTheme } from '../../../../store/reducers/theme';

const useThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.theme.themeStyle);

  const switchTheme = () => {
    const newTheme: ThemeStyleType = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
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