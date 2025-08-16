'use client';
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FEEA00' },
    secondary: { main: '#00D6DE' },
    error: { main: '#ED0000' },
    success: { main: '#54E047' },
    info: { main: '#A500FE' },
    warning: { main: '#FF6600' },
    background: {
      default: '#1E1E1E',
      paper: '#252525',
    },
  },
  shape: { borderRadius: 10 },
});
