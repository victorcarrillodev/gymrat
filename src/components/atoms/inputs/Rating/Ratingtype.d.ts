export interface RatingProps {
  //classes?: render<unknown, unknown>;
  component: React.ElementType;
  defaultValue?: number;
  disabled?: boolean;
  emptyIcon?: React.ReactNode;
  emptyLabelText?: React.ReactNode;
  highlightSelectedOnly?: boolean;
  icon?: React.ReactNode;
  //IconContainerComponent: React.ElementType;
  max?: number;
  name?: string;
  onChange?: () => void;
  onChangeActive?: () => void;
  precision?: number;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  //slotProps?: {
  //decimal?: (() => void) ;
  //icon?: (() => void) ;
  //label?: (() => void);
  //root?: (() => void);
  //};
  slots?: {
    decimal: React.ElementType;
    icon: React.ElementType;
    label: React.ElementType;
    root: React.ElementType;
  };
  sx?: React.CSSProperties;
  value?: number;
}
