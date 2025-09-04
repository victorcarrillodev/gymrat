import { Box, Button } from '@mui/material';

import { Text } from '../Text/Text';
import styles from './styles.module.scss';
import { ExerciseCardProps } from './types';

export default function ExerciseCard(props: ExerciseCardProps) {
  return (
    <Box className={styles['exercise-card']} sx={{ backgroundImage: `url(${props.imageUrl})` }}>
      {/* data container */}
      <Box className={styles['exercise-card__data-container']}>
        {/* title */}
        <Text variant="h6" className={styles['exercise-card__data-container__title']}>
          {props.title}
        </Text>
        {/* action button */}
        <div>
          <Button className={styles['exercise-card__button']} onClick={props.onButtonClick}>
            {props.buttonLabel}
          </Button>
        </div>
      </Box>
    </Box>
  );
}
