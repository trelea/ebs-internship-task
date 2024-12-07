import Loyout from '@/components/Loyout';
import TopUtilities from '@/components/TopUtilities';
import Filtration from '@/feautures/filtration/components/Filtration';
import Paginate from '@/feautures/pagination/components/Pagination';
import { usePagination } from '@/feautures/pagination/hooks/usePagination';
import Grid from '@/feautures/products/components/Grid';
import { useGetProducts } from '@/feautures/products/hooks/useGetProducts';

export default function Home() {
  const { products, loading, err } = useGetProducts();
  const { totalPages, pages, page, setPagination } = usePagination({
    products,
  });

  return (
    <Loyout>
      <div className='flex gap-6 pb-20 pt-20'>
        <Filtration />
        <div className='w-full flex flex-col gap-6'>
          <TopUtilities />
          <Grid products={pages[page - 1]} loading={loading} err={err} />
          <Paginate page={page} pages={totalPages} setPage={setPagination} />
        </div>
      </div>
    </Loyout>
  );
}
