import type { OrderModel } from '../models/Order';
import type { CreateOrderRequestType } from '../types/CreateOrderTypes';

export abstract class OrdersServiceInterface {
  abstract create(order: CreateOrderRequestType): Promise<OrderModel>;
}
