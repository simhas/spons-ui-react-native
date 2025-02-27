import React, { createContext, useContext } from 'react';
import type { SpTheme } from './types';
import { defaultTheme } from './types';

const ThemeContext = createContext<SpTheme>(defaultTheme);

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  theme?: SpTheme;
  children: React.ReactNode;
}

export function SpThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}