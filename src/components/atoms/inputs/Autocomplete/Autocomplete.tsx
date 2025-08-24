import { Autocomplete as MuiAutocomplete } from '@mui/material';

import { AutocompleteProps } from './types';

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { ...restProps } = props;
  return <MuiAutocomplete {...restProps} />;
};
