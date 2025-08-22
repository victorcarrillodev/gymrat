import { Tooltip as MuiTooltip } from '@mui/material';

import { TooltipProps } from './types';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTooltip {...rest}>{children}</MuiTooltip>;
};
