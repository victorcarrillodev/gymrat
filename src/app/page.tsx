'use client';
import { Box } from '@mui/material';
import ExerciseCard from '~/shared/components';
import Title from '~/shared/components/Title/Title';
import { Layout as Layout } from '~/shared/templates/Layout';

export default function HomePage() {
  return (
    <Layout>
      <br />
      <br />
      <Title>¿que vas a entrenar hoy?</Title>
      {/* Banner section */}
      <div>ola</div>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
        <ExerciseCard
          imageUrl="./assets/images/homepage/2.png"
          title="elevaciones laterales con mancuerna"
          buttonLabel="ver más"
          onButtonClick={() => alert('mamabicho')}
        />
      </Box>
    </Layout>
  );
}
