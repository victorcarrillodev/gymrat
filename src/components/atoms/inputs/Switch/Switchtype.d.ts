export interface SwitchProps {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  //classes?: render<unknown, unknown>;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  edge?: 'start' | 'end' | false;
  icon?: React.ReactNode;
  id?: string;

  //inputProps?: render<unknown, unknown>;

  //1onChange?: () => void;
  required?: boolean;
  size?: 'small' | 'medium';

  slots?: {
    input?: React.ElementType;
    root?: React.ElementType;
    switchBase?: React.ElementType;
    thumb?: React.ElementType;
    track?: React.ElementType;
  };

  sx?: React.CSSProperties;
  value?: unknown;
}
