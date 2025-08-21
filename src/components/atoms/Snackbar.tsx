import { Snackbar as MuiSnackbarBase } from '@mui/material';

interface SnackbarProps {
  action?: React.ReactElement;
  anchorOrigin?: { horizontal: 'center' | 'left' | 'right'; vertical: 'bottom' | 'top' };
  autoHideDuration?: number;
  //children?: React.ReactNode;
  //class: object;
  ClickAwayListenerProps?: object;
  //ContentProps: object;
  disableWindowBlurListener?: boolean;
  message?: React.ReactNode;
  open?: boolean;
  resumeHideDuration?: number;
  //TransitionProps: object;
}

export const MuiSnackbar: React.FC<SnackbarProps> = (props) => {
  const { open, autoHideDuration, message, disableWindowBlurListener, ...restProps } = props;
  return (
    <MuiSnackbarBase
      open={open}
      autoHideDuration={autoHideDuration}
      message={message}
      disableWindowBlurListener={disableWindowBlurListener}
      {...restProps}
    ></MuiSnackbarBase>
  );
};
