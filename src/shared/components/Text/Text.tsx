import { Typography } from '@mui/material';
import clsx from 'clsx';

import styles from './styles.module.scss';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
  const { children, className, variant = 'body1', ...rest } = props;

  return (
    <Typography {...rest} variant={variant} className={clsx(styles[variant], className)}>
      {children}
    </Typography>
  );
};
