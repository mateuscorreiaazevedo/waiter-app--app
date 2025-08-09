import {
  axiosHttpService,
  type HttpClient,
  handleHttpResponse,
} from '../../shared';
import { productHttpEndpointConstants } from '../constants/productHttpEndpointContants';
import type { ProductModel } from '../models/Product';
import type { ProductsServiceInterface } from './ProductsServiceInterface';

class HttpProductsService implements ProductsServiceInterface {
  constructor(private http: HttpClient) {}

  async list(): Promise<ProductModel[]> {
    const response = await this.http.request<ProductModel[]>({
      url: productHttpEndpointConstants.list(),
    });

    const result = handleHttpResponse<ProductModel[]>(response);

    return result;
  }
}

export const httpProductsService = new HttpProductsService(axiosHttpService);
