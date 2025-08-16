import Navbar from '~/components/organism/Navbar';
import { ThemeProviderCustom } from '~/context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderCustom>
      <Navbar />
      {children}
    </ThemeProviderCustom>
  );
}
