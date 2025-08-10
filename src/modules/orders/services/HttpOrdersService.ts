import {
  axiosHttpService,
  type HttpClient,
  handleHttpResponse,
} from '../../shared';
import type { OrderModel } from '../models/Order';
import type { CreateOrderRequestType } from '../types/CreateOrderTypes';
import type { OrdersServiceInterface } from './OrdersServiceInterface';

class HttpOrdersService implements OrdersServiceInterface {
  constructor(private readonly http: HttpClient) {}

  async create(order: CreateOrderRequestType): Promise<OrderModel> {
    const response = await this.http.request<
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

export const httpOrdersService = new HttpOrdersService(axiosHttpService);
