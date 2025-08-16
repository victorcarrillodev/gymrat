import { DarkTheme } from '~/theme/dark-theme';
interface darkThemes {
  children: React.ReactNode;
}

export const layoutTheme: React.FC<darkThemes> = ({ children }) => {
  return <DarkTheme>{children}</DarkTheme>;
};
