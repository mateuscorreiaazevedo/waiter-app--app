import { useQuery } from '@tanstack/react-query';
import type { ProductModel } from '../models/Product';
import { httpProductsService } from '../services/HttpProductsService';

export function useFetchProducts() {
  const listProductsKey = ['products'];

  const { data, isLoading, isFetched, error } = useQuery<ProductModel[]>({
    queryKey: listProductsKey,
    queryFn: async () => {
      const products = await httpProductsService.list();

      return products;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });

  return {
    listProductsKey,
    products: data,
    isLoading,
    isFetched,
    error,
  };
}
