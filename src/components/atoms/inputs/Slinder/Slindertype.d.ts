export interface SlinderProps {
  aria_label?: string;
  aria_labelledby?: string;
  aria_valuetext?: string;
  classes?: render;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  defaultValue?: number | number;
  disabled?: boolean;
  disableSwap?: boolean;

  max?: number;
  min?: number;
  name?: string;

  onChange?: () => void;
  onChangeCommitted?: () => void;

  orientation?: 'horizontal' | 'vertical';

  //scale?: () => void;

  shiftStep?: number;
  size?: 'small' | 'medium';

  step?: number;
  sx?: React.CSSProperties;
  tabIndex?: number;

  track?: 'inverted' | 'normal' | false;
  value?: number;
  valueLabelDisplay?: 'auto' | 'off' | 'on';
}
