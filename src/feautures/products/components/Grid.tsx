import { useGetProducts } from '../hooks/useGetProducts';
import CardProduct from './CardProduct';
import Loading from '@/components/Loading';

export default function Grid() {
  const { products, isFetching, isLoading, isPending } = useGetProducts();

  if (isFetching || isLoading || isPending) return <Loading />;

  return (
    <section className='grid grid-cols-3 w-full gap-6'>
      {products?.map((product) => (
        <CardProduct
          key={product.id}
          img={product.image}
          name={product.title}
          price={product.price}
          category={product.category}
        />
      ))}
    </section>
  );
}
