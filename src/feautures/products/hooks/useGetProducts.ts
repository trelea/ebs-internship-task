import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products.api';
import { useGetFiltredProducts } from './useGetFiltredProducts';

export const useGetProducts = () => {
  const { data, isPending, isLoading, isFetching, error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await getProducts(),
  });

  const { products } = useGetFiltredProducts({ _products: data });

  return { products, isPending, isLoading, isFetching, error, isError };
};
