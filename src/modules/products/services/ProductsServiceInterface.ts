import type { ProductModel } from '../models/Product';

export abstract class ProductsServiceInterface {
  abstract list(): Promise<ProductModel[]>;
}
