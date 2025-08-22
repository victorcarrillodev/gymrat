export interface TooltipProps {
  children: ReactElement;
  arrow?: boolean;
  describeChild?: boolean;
  disableFocusListener?: boolean;
  disableHoverListener?: boolean;
  disableInteractive?: boolean;
  disableTouchListener?: boolean;
  enterDelay?: number;
  enterNextDelay?: number;
  enterTouchDelay?: number;
  followCursor?: boolean;
  id?: string;
  leaveDelay?: number;
  leaveTouchDelay?: number;
  onClose?: () => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  placement?:
    | 'auto-end'
    | 'auto-start'
    | 'auto'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  sx?: React.CSSProperties;
  title: React.ReactNode;
}
