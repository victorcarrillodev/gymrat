export interface TextProps {
  children: React.ReactNode;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'textPrimary' | 'textSecondary' | 'textDisabled';
  component?: React.ElementType;
  gutterBottom?: boolean;
  noWrap?: boolean;
  sx?: React.CSSProperties;
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  className?: ClassValue; // acepta string | string[] | object (lo que clsx soporta)
}
