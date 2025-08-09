import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { httpCategoriesService } from '../services/HttpCategoriesService';

export function useFetchProductsByCategory() {
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
      setSelectedCategory(prev => {
        const newPrev = prev;

        if (newPrev === categoryId) {
          return null;
        }

        return categoryId;
      });
    },
    onSuccess: productsByCategory => {
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
