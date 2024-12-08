import ErrorDialog from '@/components/ErrorDialog';
// import { useGetProducts } from '../hooks/useGetProducts';
import CardProduct from './CardProduct';
import Loading from '@/components/Loading';
import NotFound from './NotFound';
import { Product } from '../types/products.types';

interface Props {
  products?: Product[];
  loading?: boolean;
  err?: false | Error;
}

export default function Grid({ products, loading, err }: Props) {
  if (loading) return <Loading />;
  if (err) return <ErrorDialog />;

  return (
    <>
      {products?.length === 0 || !products ? (
        <NotFound />
      ) : (
        <section className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 w-full gap-6'>
          {products?.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </section>
      )}
    </>
  );
}
