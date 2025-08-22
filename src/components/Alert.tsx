import { Alert as MuiAlertBase } from '@mui/material';
import React from 'react';

interface AlertProps {
  action?: React.ReactNode;
  children?: React.ReactNode;
  classes?: object;
  closeText?: string;
  color?: 'error' | 'info' | 'success' | 'warning';
  componentsProps?: {
    closeButton?: object;
    closeIcon?: object;
  };
  icon?: React.ReactNode | false;
  iconMapping?: {
    error?: React.ReactNode;
    info?: React.ReactNode;
    success?: React.ReactNode;
    warning?: React.ReactNode;
  };
  role?: string; // Default: 'alert'
  severity?: 'error' | 'info' | 'success' | 'warning';
  variant?: 'filled' | 'outlined' | 'standard';
}
export const MuiAlert: React.FC<AlertProps> = (props) => {
  const { children, ...restProps } = props;
  return <MuiAlertBase {...restProps}>{children}</MuiAlertBase>;
};
