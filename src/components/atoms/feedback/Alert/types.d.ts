export interface AlertProps {
  action?: React.ReactNode;
  children?: React.ReactNode;
  // classes?: object;
  closeText?: string;
  color?: 'error' | 'info' | 'success' | 'warning';
  componentsProps?: {
    closeButton?: object;
    closeIcon?: object;
  };
  icon?: React.ReactNode;
  iconMapping?: {
    error?: React.ReactNode;
    info?: React.ReactNode;
    success?: React.ReactNode;
    warning?: React.ReactNode;
  };
  onClose?: (event: React.SyntheticEvent) => void;
  role?: string; // Default: 'alert'
  severity?: 'error' | 'info' | 'success' | 'warning';
  sx?: React.CSSProperties;
  variant?: 'filled' | 'outlined' | 'standard';
}
