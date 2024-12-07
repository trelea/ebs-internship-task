import Loyout from '@/components/Loyout';
import Filtration from '@/feautures/filtration/components/Filtration';
import Grid from '@/feautures/products/components/Grid';

export default function Home() {
  return (
    <Loyout>
      <div className='flex gap-6'>
        <Filtration />
        <div className='w-full'>
          <Grid />
        </div>
      </div>
    </Loyout>
  );
}
