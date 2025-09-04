'use client';
import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FEEA00' },
    secondary: { main: '#00D6DE' },
    error: { main: '#ED0000' },
    success: { main: '#54E047' },
    info: { main: '#A500FE' },
    warning: { main: '#FF6600' },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  shape: { borderRadius: 10 },
});
