export interface CheckboxProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  //classes?: render<unknown,unknown>;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  indeterminateIcon?: React.ReactNode;
  //inputProps?: render<unknown,unknown>;
  //onChange?: () => void;
  required?: boolean;
  size?: 'medium' | 'small';
  //slotProps?: {
  //input?: (() => void);
  //root?: (() => void);
  //};
  slots?: {
    input?: React.ElementType;
    root?: React.ElementType;
  };
  sx?: React.CSSProperties;
  value?: unknown;
}
