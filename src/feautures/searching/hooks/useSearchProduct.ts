import { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

const iterateIntoURIQueries = (queries: URLSearchParams) => {
  let q = {};
  let c: string[] = [];
  for (const [key, val] of queries.entries()) {
    key === 'categories'
      ? (c = [...c, val])
      : key && val && key !== 'query' && (q = { ...q, [key]: val });
  }
  return { ...q, categories: c };
};

export const useSearchProduct = () => {
  const [queries, setQueries] = useSearchParams();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query = new FormData(event.target as any).get('query');
    if (!String(query).length) return;
    setQueries({ ...iterateIntoURIQueries(queries), query: query as string });
  };

  const handleEmptyString = (event: any) => {
    if (!event.target.value) setQueries({ ...iterateIntoURIQueries(queries) });
  };

  return { handleSubmit, handleEmptyString, queries };
};
