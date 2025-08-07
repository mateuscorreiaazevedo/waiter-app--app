import type { Ingredient } from './Ingredient';

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  category: string;
  ingredients?: Ingredient[];
}
