import { useSearchParams } from 'react-router-dom';
import { Product } from '../types/products.types';

export const useGetFiltredProducts = ({
  _products,
}: {
  _products?: Product[];
}) => {
  const [queries, setQueries] = useSearchParams();

  let filtred = _products?.filter(
    (product) =>
      product.price >= (parseFloat(queries.get('price_from') as string) || 0) &&
      product.price <=
        (parseFloat(queries.get('price_to') as string) || 999999) &&
      product.rating.count >=
        (parseFloat(queries.get('count_from') as string) || 0) &&
      product.rating.count <=
        (parseFloat(queries.get('count_to') as string) || 999999) &&
      product.rating.rate >=
        (parseFloat(queries.get('rate_from') as string) || 0) &&
      product.rating.rate <=
        (parseFloat(queries.get('rate_to') as string) || 999999)
  );

  if (queries.getAll('categories').length)
    filtred = filtred?.filter((product) =>
      queries.getAll('categories').includes(product.category)
    );

  return { products: filtred };
};
