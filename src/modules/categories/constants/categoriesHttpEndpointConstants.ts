type FunctionType = (value?: string) => string;

export const categoriesHttpEndpointConstants: Record<string, FunctionType> = {
  list: () => '/categories',
};
