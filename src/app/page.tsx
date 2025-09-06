'use client';
import { Box } from '@mui/material';
import BlogCard from '~/modules/blog/components/BlogCard/Component';
import { ExerciseCard } from '~/modules/exercise/components';
import { Button, Text, Title } from '~/shared/components/';
import { Layout } from '~/shared/templates/Layout';

import styles from './styles.module.scss';

export default function HomePage() {
  return (
    <Layout>
      <section className={styles.banner}>
        <div>
          <Text variant="h1" className={styles['banner__title']}>
            SOMOS GYMRAT, NACIMOS PARA ENTRENAR
          </Text>
          <Text variant="subtitle1" className={styles['banner__subtitle']}>
            tu proxima adicción en el mundo fitness
          </Text>
        </div>
        <div>
          <Button>empieza ahora</Button>
        </div>
      </section>
      {/* section */}
      <section className={styles.exercise}>
        <Title>¿qué vas a entrenar hoy?</Title>
        <div className={styles['exercise__cards']}>
          {[...Array(5)].map((_, i) => (
            <ExerciseCard
              key={i}
              imageUrl="./assets/images/homepage/1.png"
              title="elevaciones con mancuernas"
              onButtonClick={() => console.log('object')}
              buttonLabel="ver más"
            />
          ))}
        </div>
      </section>
      {/* section */}
      <section className={styles.blog}>
        <Title>mira lo nuevo de nuestro blog</Title>
        <div className={styles['blog__cards']}>
          {[...Array(4)].map((_, i) => (
            <BlogCard key={i} />
          ))}{' '}
        </div>
      </section>
      {/* section */}
      <Box className={styles['second-banner']} sx={{ bgcolor: 'primary.main' }}>
        <div className={styles['second-banner__container-img']}>
          <div className={styles['second-banner__container-img'] + ' data'}>
            <Text variant="h4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque perferendis veniam illo assumenda dolorum alias quisquam
              facere atque adipisci laudantium.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad quae vel ipsa beatae enim dolorum amet labore nesciunt rem
              expedita laudantium error inventore quaerat nemo sunt eligendi aspernatur necessitatibus dolor, architecto a, omnis
              praesentium! Similique dolore culpa cum temporibus numquam dicta vero odio eos! Distinctio expedita saepe itaque, numquam
              molestias, sed incidunt harum laudantium dolorum rem corrupti dolores iste officiis deserunt ex maxime quisquam quod fugiat
              eveniet rerum sint quo libero? Maiores corporis ullam ipsum. Corporis molestias aperiam quas.
            </Text>
          </div>
        </div>
      </Box>
    </Layout>
  );
}
