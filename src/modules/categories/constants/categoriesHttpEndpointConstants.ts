export const categoriesHttpEndpointConstants: Record<string, ConstantType> = {
  list: () => '/categories',
  listProductsByCategory: (value?: string) => `/categories/${value}/products`,
};
