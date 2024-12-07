import { Product } from '../types/products.types';

export const getProducts = async (): Promise<Product[]> => {
  return await fetch('https://fakestoreapi.com/products').then((res) =>
    res.json()
  );
};
