import type { Product } from '../../products';

export interface OrderProduct {
  product: Product;
  quantity: number;
}
