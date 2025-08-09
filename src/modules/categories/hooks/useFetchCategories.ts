import { useQuery } from '@tanstack/react-query';
import type { CategoryModel } from '../models/Category';
import { httpCategoriesService } from '../services/HttpCategoriesService';

export function useFetchCategories() {
  const { data, isLoading, isFetched, error } = useQuery<CategoryModel[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await httpCategoriesService.list();

      return categories;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });

  return {
    categories: data,
    isLoading,
    isFetched,
    error,
  };
}
