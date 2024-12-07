import Search from '@/feautures/searching/components/Search';
import SortBy from '@/feautures/sorting/components/SortBy';
import { useSearchParams } from 'react-router-dom';

export default function TopUtilities() {
  const [_] = useSearchParams();
  return (
    <>
      <Search />
      <section className='flex justify-between items-center'>
        <h1 className='text-base text-foreground/50 font-semibold'>
          Query: {_.get('query')}
        </h1>
        <SortBy />
      </section>
    </>
  );
}
