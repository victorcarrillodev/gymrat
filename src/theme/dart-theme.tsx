import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FEEA00',
    },
    secondary: {
      main: '#00D6DE',
    },
    error: {
      main: '#ED0000',
    },
    success: {
      main: '#54E047',
    },
    info: {
      main: '#A500FE',
    },
    warning: {
      main: '#FF6600',
    },
    background: {
      default: '#1E1E1E',
      paper: '#252525',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export const DarkTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
