import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { httpCategoriesService } from '../services/HttpCategoriesService';

interface UseFetchProductsByCategoryProps {
  setIsRefetchLoading?: (value: boolean) => void;
}

export function useFetchProductsByCategory({
  setIsRefetchLoading,
}: UseFetchProductsByCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutateAsync: handleListProductsByCategory } = useMutation({
    mutationKey: ['listProductsByCategory', selectedCategory],
    mutationFn: async (categoryId: string) => {
      if (categoryId === selectedCategory) {
        return;
      }

      const productsByCategory =
        await httpCategoriesService.listProductsByCategory(categoryId);

      return productsByCategory;
    },

    onMutate: (categoryId: string) => {
      setIsRefetchLoading?.(true);
      setSelectedCategory(prev => {
        const newPrev = prev;

        if (newPrev === categoryId) {
          return null;
        }

        return categoryId;
      });
    },
    onSuccess: productsByCategory => {
      setIsRefetchLoading?.(false);

      if (!productsByCategory) {
        queryClient.invalidateQueries({
          queryKey: ['products'],
        });

        return;
      }

      queryClient.setQueryData(['products'], productsByCategory);
    },
  });

  return {
    selectedCategory,
    handleListProductsByCategory,
  };
}
