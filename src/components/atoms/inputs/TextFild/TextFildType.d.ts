export interface TextFieldProps {
  //autoComplete?: string;
  //autoFocus?: boolean;
  //classes?: render<unknown, unknown>;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultValue?: unknown;
  disabled?: boolean;
  error?: boolean;

  //FormHelperTextProps?: render<unknown, unknown>;

  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;

  //InputLabelProps?: render<unknown, unknown>;

  //inputProps?: render<unknown, unknown>;

  //InputProps?: render<unknown, unknown>;

  label?: React.ReactNode;
  margin?: 'dense' | 'none' | 'normal';
  maxRows?: number | string;
  minRows?: number | string;
  multiline?: boolean;
  name?: string;

  //onChange?: () => void;

  placeholder?: string;
  required?: boolean;
  rows?: number | string;
  select?: boolean;

  //SelectProps?: render<unknown, unknown>;

  size?: 'medium' | 'small';
  sx?: React.CSSProperties;
  type?: string;
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
}
