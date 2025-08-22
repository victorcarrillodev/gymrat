import Navbar from '~/components/organisms/Navbar';
import { ThemeProviderCustom } from '~/context/ThemeContext';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderCustom>
      <Navbar />
      {children}
    </ThemeProviderCustom>
  );
}
