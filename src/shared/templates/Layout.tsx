import { Box } from '@mui/material';
import Footer from '~/shared/components/Footer/Footer';
import Navbar from '~/shared/components/Navbar/Navbar';
import { ThemeProviderCustom } from '~/shared/theme/context/ThemeContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviderCustom>
      <Navbar />
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
      <Footer />
    </ThemeProviderCustom>
  );
};
