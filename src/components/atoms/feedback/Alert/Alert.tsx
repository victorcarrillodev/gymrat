import { Alert as MuiAlert } from '@mui/material';

import { AlertProps } from './types';

export const Alert: React.FC<AlertProps> = (props) => {
  const { children, ...restProps } = props;
  return <MuiAlert {...restProps}>{children}</MuiAlert>;
};
