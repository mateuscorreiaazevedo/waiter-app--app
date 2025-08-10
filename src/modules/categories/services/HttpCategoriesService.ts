import type { ProductModel } from '../../products';
import { handleHttpResponse, httpClientService } from '../../shared';
import { categoriesHttpEndpointConstants } from '../constants/categoriesHttpEndpointConstants';
import type { CategoryModel } from '../models/Category';
import type { CategoriesServiceInterface } from './CategoriesServiceInterface';

class HttpCategoriesService implements CategoriesServiceInterface {
  async list(): Promise<CategoryModel[]> {
    const response = await httpClientService.query<CategoryModel[]>({
      url: categoriesHttpEndpointConstants.list(),
    });

    const result = handleHttpResponse<CategoryModel[]>(response);

    return result;
  }

  async listProductsByCategory(categoryId: string): Promise<ProductModel[]> {
    const response = await httpClientService.query<ProductModel[]>({
      url: categoriesHttpEndpointConstants.listProductsByCategory(categoryId),
    });

    const result = handleHttpResponse<ProductModel[]>(response);

    return result;
  }
}

export const httpCategoriesService = new HttpCategoriesService();
