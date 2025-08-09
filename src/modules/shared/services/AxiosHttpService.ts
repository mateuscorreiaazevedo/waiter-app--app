import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { env } from '../../../infra/config/env';
import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../types/HttpClient';

class AxiosHttpService implements HttpClient {
  private instance: AxiosInstance;

  constructor(private readonly BASE_URL: string = env.EXPO_PUBLIC_BASE_URL) {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  async request<TData = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TData>> {
    const { url, method = 'GET', body, headers, params } = request;
    let response: AxiosResponse;

    try {
      response = await this.instance.request<TData>({
        url,
        method,
        data: body,
        headers,
        params,
      });
    } catch (err) {
      response = (err as AxiosError).response!;
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  }
}

export const axiosHttpService = new AxiosHttpService();
