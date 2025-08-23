import { Switch as MuiSwitchBase } from '@mui/material';

import { SwitchProps } from './Switchtype';

export const MuiSwitch: React.FC<SwitchProps> = (props) => {
  const { ...restProps } = props;
  return <MuiSwitchBase {...restProps}></MuiSwitchBase>;
};
