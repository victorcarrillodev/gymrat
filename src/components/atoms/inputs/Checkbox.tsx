import { Checkbox as MuiCheckboxBase } from '@mui/material';

import { CheckboxProps } from './Checkboxtype';

export const MuiCheckbox: React.FC<CheckboxProps> = (props) => {
  const { ...restProps } = props;
  return <MuiCheckboxBase {...restProps}></MuiCheckboxBase>;
};
