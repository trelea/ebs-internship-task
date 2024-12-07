import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/filtration.api';

export const useGetCategories = () => {
  const { data, isPending, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories(),
  });
  return { data, isPending, isLoading, isFetching, isError, error };
};
