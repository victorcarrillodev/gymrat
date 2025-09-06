import { Box } from '@mui/material';
import { Text } from '~/shared/components';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function BlogCard() {
  return (
    <Box className={styles['blog-card']}>
      <div className={styles['blog-card__img-wrapper']}>
        <Image src="/assets/images/homepage/1.png" alt="ola" fill className={styles['blog-card__img-wrapper__img']} />
      </div>
      <Box className={styles['blog-card__data']}>
        <div className={styles['blog-card__data-header']}>
          <Text variant="h6">este es el title</Text>
          <Text variant="subtitle1">este es el subtitle</Text>
        </div>
        <div className={styles['blog-card__data-body']}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur corrupti omnis officiis aut soluta nobis dignissimos
            molestias rerum nemo blanditiis, eligendi adipisci cupiditate itaque quod mollitia esse, facilis sapiente in, doloribus
            laudantium neque distinctio eius quas. Officiis, deserunt dicta.
          </Text>
        </div>
      </Box>
    </Box>
  );
}
