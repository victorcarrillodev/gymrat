'use client';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { darkTheme } from '~/theme/darkTheme';
import { lightTheme } from '~/theme/lightTheme';
import React, { createContext, useContext, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext debe usarse dentro de ThemeProviderCustom');
  return ctx;
};

export const ThemeProviderCustom = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const toggleTheme = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              transition: 'background-color 0.5s ease, color 0.3s ease',
            },
          }}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
