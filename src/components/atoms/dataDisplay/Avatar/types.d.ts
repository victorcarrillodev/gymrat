export interface AvatarProps {
  alt?: string;
  children?: React.ReactNode;
  component?: React.ElementType;
  src?: string;
  srcSet?: string;
  sx?: React.CSSProperties;
  variant?: 'circular' | 'rounded' | 'square';
}
