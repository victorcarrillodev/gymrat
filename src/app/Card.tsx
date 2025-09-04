import { Box } from '@mui/material';
import { Text } from '~/components/atoms/dataDisplay/Text/Text';
import { Button } from '~/components/atoms/inputs/Button/Button';
import { clsx } from 'clsx';

import styles from './page.module.scss';

type TrainingCardProps = {
  imageSrc: string;
  altText: string;
  title: string;
  onClick?: () => void;
};

export const TrainingCard = ({ imageSrc, altText, title, onClick }: TrainingCardProps) => {
  return (
    <Box className={clsx(styles.entraintCard)}>
      <img src={imageSrc} alt={altText} className={clsx(styles.entraintCard__image)} loading="lazy" />

      <Box className={clsx(styles.entraintCard__overlay)}>
        <Text variant="h5" className={clsx(styles.entraintCard__title)}>
          {title}
        </Text>

        <Button variant="outlined" onClick={onClick}>
          Ver más
        </Button>
      </Box>
    </Box>
  );
};
