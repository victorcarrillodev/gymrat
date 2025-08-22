import { Typography } from '@mui/material';

import styles from './styles.module.scss';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Typography {...rest} className={styles.background}>
      {children}
    </Typography>
  );
};
