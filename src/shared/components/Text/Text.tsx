import { Typography } from '@mui/material';
import clsx from 'clsx';

import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Typography {...rest} className={clsx('my_class', className)}>
      {children}
    </Typography>
  );
};
