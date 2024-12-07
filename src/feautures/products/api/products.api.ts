import { Product } from '../types/products.types';

export const getProducts = async (): Promise<Product[]> => {
  return await fetch('https://fakestoreapi.com/products').then((res) =>
    res.json()
  );
};

export const getProductsJewelery = async (): Promise<Product[]> => {
  return await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  ).then((res) => res.json());
};

export const getProductsElectronics = async (): Promise<Product[]> => {
  return await fetch(
    'https://fakestoreapi.com/products/category/electronics'
  ).then((res) => res.json());
};

export const getProductsMen = async (): Promise<Product[]> => {
  return await fetch(
    `https://fakestoreapi.com/products/category/men's clothing`
  ).then((res) => res.json());
};

export const getProductsWomen = async (): Promise<Product[]> => {
  return await fetch(
    `https://fakestoreapi.com/products/category/women's clothing`
  ).then((res) => res.json());
};
