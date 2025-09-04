import { Text } from '../Text/Text';
import styles from './styles.module.scss';

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Text align="center" variant="h3" className={styles.title}>
      {children}
    </Text>
  );
}
