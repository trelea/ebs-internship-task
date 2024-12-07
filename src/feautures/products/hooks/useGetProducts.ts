import { useQuery } from '@tanstack/react-query';
import {
  getProducts,
  getProductsElectronics,
  getProductsJewelery,
  getProductsMen,
  getProductsWomen,
} from '../api/products.api';
import { useGetFiltredProducts } from './useGetFiltredProducts';
import { useSearchParams } from 'react-router-dom';

enum CATEGORY {
  ELECTRONICS = 'electronics',
  MENS = `men's clothing`,
  WOMENS = `women's clothing`,
  JWELERY = `jewelery`,
}

export const useGetProducts = () => {
  const [queries] = useSearchParams();

  const { data, isLoading, isFetching, isPending, error, isError } = useQuery({
    queryKey: ['products', queries.getAll('categories') || null],
    queryFn: async () => {
      if (queries.getAll('categories').length === 0) return await getProducts();

      let fetchersPromisers: Array<Promise<any>> = [];

      if (queries.getAll('categories').includes(CATEGORY.ELECTRONICS))
        fetchersPromisers = [...fetchersPromisers, getProductsElectronics()];

      if (queries.getAll('categories').includes(CATEGORY.MENS))
        fetchersPromisers = [...fetchersPromisers, getProductsMen()];

      if (queries.getAll('categories').includes(CATEGORY.WOMENS))
        fetchersPromisers = [...fetchersPromisers, getProductsWomen()];

      if (queries.getAll('categories').includes(CATEGORY.JWELERY))
        fetchersPromisers = [...fetchersPromisers, getProductsJewelery()];

      return (await Promise.all(fetchersPromisers)).flat();
    },
  });

  const { products } = useGetFiltredProducts({
    _products: data,
  });

  return {
    products,
    loading: isLoading || isPending || isFetching,
    err: error || isError,
  };
};
