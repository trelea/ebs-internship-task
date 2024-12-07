import { Product } from '@/feautures/products/types/products.types';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const iterateIntoURIQueries = (queries: URLSearchParams) => {
  let q = {};
  let c: string[] = [];
  for (const [key, val] of queries.entries()) {
    key === 'categories'
      ? (c = [...c, val])
      : key && val && key !== 'page' && (q = { ...q, [key]: val });
  }
  return { ...q, categories: c };
};

export const usePagination = ({
  products,
}: {
  products: Product[] | undefined;
}) => {
  const [queries, setQueries] = useSearchParams();

  const totalPages = Math.trunc((products?.length as number) / 6) + 1;
  let pages: Product[][] = [];
  while (products?.length) pages = [...pages, products.splice(0, 6)];

  if (!queries.get('page'))
    setQueries({ ...iterateIntoURIQueries(queries), page: '1' });

  const setPagination = (page: number) =>
    setQueries({ ...iterateIntoURIQueries(queries), page: page.toString() });

  return {
    totalPages,
    pages,
    page: parseInt(queries.get('page') as string),
    setPagination,
  };
};
