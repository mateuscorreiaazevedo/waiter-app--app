import { handleHttpResponse, httpClientService } from '../../shared';
import type { OrderModel } from '../models/Order';
import type { CreateOrderRequestType } from '../types/CreateOrderTypes';
import type { OrdersServiceInterface } from './OrdersServiceInterface';

class HttpOrdersService implements OrdersServiceInterface {
  async create(order: CreateOrderRequestType): Promise<OrderModel> {
    const response = await httpClientService.query<
      OrderModel,
      CreateOrderRequestType
    >({
      url: '/orders',
      method: 'POST',
      body: order,
    });

    const result = handleHttpResponse<OrderModel>(response);

    return result;
  }
}

export const httpOrdersService = new HttpOrdersService();
