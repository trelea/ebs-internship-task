enum SORT_BY {
  PRICE = 'price',
  RATE = 'rate',
  COUNT = 'count',
}

enum SORT_TYPE {
  ASC = 'asc',
  DESC = 'desc',
}

export const PRICE_DESC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.DESC && q.get('sort_by') === SORT_BY.PRICE
  );
};

export const PRICE_ASC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.ASC && q.get('sort_by') === SORT_BY.PRICE
  );
};

export const COUNT_DESC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.DESC && q.get('sort_by') === SORT_BY.COUNT
  );
};

export const COUNT_ASC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.ASC && q.get('sort_by') === SORT_BY.COUNT
  );
};

export const RATE_DESC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.DESC && q.get('sort_by') === SORT_BY.RATE
  );
};

export const RATE_ASC = (q: URLSearchParams): boolean => {
  return (
    q.get('sort_type') === SORT_TYPE.ASC && q.get('sort_by') === SORT_BY.RATE
  );
};
