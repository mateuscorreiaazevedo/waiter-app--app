import { useQuery } from '@tanstack/react-query';
import type { ProductModel } from '../models/Product';
import { httpProductsService } from '../services/HttpProductsService';

export function useFetchProducts() {
  const { data, isLoading, isFetched, error, isFetching } = useQuery<
    ProductModel[]
  >({
    queryKey: ['products'],
    queryFn: async () => {
      const products = await httpProductsService.list();

      return products;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });

  return {
    products: data,
    isLoading: isFetching || isLoading,
    isFetched,
    error,
  };
}
