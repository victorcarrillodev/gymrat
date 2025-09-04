import { Slider as MuiSlinderBase } from '@mui/material';

import { SlinderProps } from './Slindertype';

export const MuiSlinder: React.FC<SlinderProps> = (props) => {
  const { ...restProps } = props;
  return <MuiSlinderBase {...restProps}></MuiSlinderBase>;
};
