import { Select as MuiSelectBase } from '@mui/material';

import { SelectProps } from './Selecttype';

export const MuiSelect: React.FC<SelectProps> = (props) => {
  const { ...restProps } = props;
  return <MuiSelectBase {...restProps}></MuiSelectBase>;
};
