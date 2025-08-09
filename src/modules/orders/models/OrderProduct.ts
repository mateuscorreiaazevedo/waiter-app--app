import type { ProductModel } from '../../products';

export interface OrderProductModel {
  product: ProductModel;
  quantity: number;
}
