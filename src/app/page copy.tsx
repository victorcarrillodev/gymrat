import { Box } from '@mui/material';
import { Button } from '~/shared/components/Button/Button';
import { Text } from '~/shared/components/Text/Text';
import { Layout as Layout } from '~/shared/templates/Layout';
import { clsx } from 'clsx';

import { TrainingCard } from './card';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <Layout>
      {/* Banner section */}
      <Box className={styles.banner} sx={{ backgroundImage: "url('/assets/images/homepage/1.png')" }}>
        <Text variant="h3" className={clsx(styles['banner__title'])}>
          NOSOTROS SOMOS GYMRAT
        </Text>
        <Text variant="h4" className={clsx(styles['banner__subtitle'])}>
          tu mejor opción en el mundo del fitness
        </Text>
        <div>
          <Button>sÉ parte</Button>
        </div>
      </Box>

      {/* trainning section */}
      <Box className={clsx(styles.entraint)}>
        <Text variant="h3" className={clsx(styles['entraint__title'])}>
          ¿Qué vas a entrenar hoy?
        </Text>

        <Box className={clsx(styles.entraintGrid)}>
          {/* Card 1 */}
          <TrainingCard
            imageSrc="/assets/images/homepage/2.png"
            altText="Elevaciones de hombro con mancuerna"
            title="Elevaciones de Hombro"
          />
          <Button> ver mas</Button>
          {/* Card 2 */}
          <TrainingCard imageSrc="/assets/images/homepage/3.png" altText="EJERCIOS CON POLEA" title="EJERCIOS CON POLEA" />
          <Button> ver mas</Button>
        </Box>
      </Box>
    </Layout>
  );
}
