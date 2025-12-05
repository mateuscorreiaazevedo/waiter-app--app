import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { socketClientService } from '../../shared';
import type { ProductModel } from '../models/Product';
import { httpProductsService } from '../services/HttpProductsService';

export function useFetchProducts() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleNewProduct = (...args: unknown[]) => {
      const [newProduct] = args as [ProductModel];

      queryClient.setQueryData<ProductModel[]>(['products'], oldProducts => {
        if (!oldProducts) {
          return [newProduct];
        }

        return oldProducts.concat(newProduct);
      });
    };

    socketClientService.on('createProduct', handleNewProduct);

    return () => {
      socketClientService.off('createProduct', handleNewProduct);
    };
  }, []);

  const { data, isLoading, isFetched, error, isFetching, refetch } = useQuery<
    ProductModel[]
  >({
    queryKey: ['products'],
    queryFn: async () => {
      const products = await httpProductsService.list();

      return products;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });

  async function refetchProducts() {
    await refetch();
  }

  return {
    products: data,
    isLoading: isFetching || isLoading,
    isFetched,
    error,
    refetchProducts,
  };
}
