import { useMutation } from '@tanstack/react-query';
import { httpOrdersService } from '../services/HttpOrdersService';
import type { CreateOrderRequestType } from '../types/CreateOrderTypes';

export function useCreateOrder() {
  const { mutateAsync: onCreateOrder, isPending } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: async (payload: CreateOrderRequestType) => {
      await httpOrdersService.create(payload);
    },
    onError: error => {
      alert(error?.message);
    },
  });

  return {
    onCreateOrder,
    isPending,
  };
}
