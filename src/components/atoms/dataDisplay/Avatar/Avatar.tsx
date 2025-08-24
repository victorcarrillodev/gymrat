import { Avatar as MuiAvatar } from '@mui/material';

import { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { ...restProps } = props;
  return <MuiAvatar {...restProps} />;
};
