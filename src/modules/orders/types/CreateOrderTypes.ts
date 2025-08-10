export interface CreateOrderProductRequestType {
  product: string;
  quantity: number;
}

export interface CreateOrderRequestType {
  table: string;
  products: CreateOrderProductRequestType[];
}
