import { handleHttpResponse, httpClientService } from '../../shared';
import { productHttpEndpointConstants } from '../constants/productHttpEndpointContants';
import type { ProductModel } from '../models/Product';
import type { ProductsServiceInterface } from './ProductsServiceInterface';

class HttpProductsService implements ProductsServiceInterface {
  async list(): Promise<ProductModel[]> {
    const response = await httpClientService.query<ProductModel[]>({
      url: productHttpEndpointConstants.list(),
    });

    const result = handleHttpResponse<ProductModel[]>(response);

    return result;
  }
}

export const httpProductsService = new HttpProductsService();
