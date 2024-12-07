import { useSearchParams } from 'react-router-dom';
import { Product } from '../types/products.types';
import {
  COUNT_ASC,
  COUNT_DESC,
  PRICE_ASC,
  PRICE_DESC,
  RATE_ASC,
  RATE_DESC,
} from '../utils/utils';

export const useGetFiltredProducts = ({
  _products,
}: {
  _products?: Product[];
}) => {
  const [queries, _] = useSearchParams();

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
        (parseFloat(queries.get('rate_to') as string) || 999999) &&
      product.title
        .toLowerCase()
        .includes((queries.get('query')?.toLowerCase() as string) || '')
  );

  if (PRICE_DESC(queries)) filtred = filtred?.sort((a, b) => b.price - a.price);
  if (PRICE_ASC(queries)) filtred = filtred?.sort((a, b) => a.price - b.price);

  if (COUNT_DESC(queries))
    filtred = filtred?.sort((a, b) => b.rating.count - a.rating.count);

  if (COUNT_ASC(queries))
    filtred = filtred?.sort((a, b) => a.rating.count - b.rating.count);

  if (RATE_DESC(queries))
    filtred = filtred?.sort((a, b) => b.rating.rate - a.rating.rate);

  if (RATE_ASC(queries))
    filtred = filtred?.sort((a, b) => a.rating.rate - b.rating.rate);

  return { products: filtred };
};
