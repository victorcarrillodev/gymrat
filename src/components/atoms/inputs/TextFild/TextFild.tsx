import { TextField as MuiTextFildBase } from '@mui/material';

import { TextFieldProps } from './TextFildType';

export const MuiTextFild: React.FC<TextFieldProps> = (props) => {
  const { ...restProps } = props;
  return <MuiTextFildBase {...restProps}></MuiTextFildBase>;
};
