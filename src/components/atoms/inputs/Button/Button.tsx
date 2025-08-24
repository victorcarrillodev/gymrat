import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'contained', ...restProps } = props;
  return (
    <MuiButton variant={variant} {...restProps}>
      {children}
    </MuiButton>
  );
};
