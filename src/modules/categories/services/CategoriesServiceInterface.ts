import type { ProductModel } from '../../products';
import type { CategoryModel } from '../models/Category';

export abstract class CategoriesServiceInterface {
  abstract list(): Promise<CategoryModel[]>;
  abstract listProductsByCategory(categoryId: string): Promise<ProductModel[]>;
}
