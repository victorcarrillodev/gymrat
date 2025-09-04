import Navbar from '~/components/organisms/Navbar';
import { ThemeProviderCustom } from '~/context/ThemeContext';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProviderCustom>
      <Navbar />
      {children}
    </ThemeProviderCustom>
  );
};
