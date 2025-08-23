export interface SelectProps {
  autoWidth?: boolean;
  children?: React.ReactNode;
  //classes?: render<unknown, unknown>;
  defaultOpen?: boolean;
  defaultValue?: unknown;
  displayEmpty?: boolean;
  IconComponent?: React.ElementType;
  id?: string;
  input?: React.ReactElement;
  //inputProps?: render<unknown, unknown>;
  label?: React.ReactNode;
  labelId?: string;
  //MenuProps?: render<unknown, unknown>;
  multiple?: boolean;
  native?: boolean;
  onChange?: () => void;
  onClose?: () => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  //SelectDisplayProps?: render<unknown, unknown>;
  sx?: React.CSSProperties;
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
}
