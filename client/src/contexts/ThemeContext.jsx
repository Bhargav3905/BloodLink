import { createContext, useEffect, useMemo, useState } from 'react';

import { THEMES } from '../constants/theme';
import { STORAGE_KEYS } from '../constants/storageKeys';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === THEMES.DARK
    );

    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;