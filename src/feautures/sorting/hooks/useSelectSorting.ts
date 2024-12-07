import { useSearchParams } from 'react-router-dom';

const iterateIntoURIQueries = (queries: URLSearchParams) => {
  let q = {};
  let c: string[] = [];
  for (const [key, val] of queries.entries()) {
    key === 'categories'
      ? (c = [...c, val])
      : key &&
        val &&
        key !== 'sort_by' &&
        key !== 'sort_type' &&
        (q = { ...q, [key]: val });
  }
  return { ...q, categories: c };
};

export const useSelectSorting = () => {
  const [queries, setQueries] = useSearchParams();

  const onSelect = (value: string) => {
    const [by, type] = value.split('_');
    console.log(iterateIntoURIQueries(queries));
    setQueries({
      ...iterateIntoURIQueries(queries),
      sort_type: type,
      sort_by: by,
    });
  };

  return { onSelect, queries };
};
