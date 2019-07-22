import { ProductCategory } from '../enums/product-category';

export class Product {
  name: string;
  category: ProductCategory;
  price: number;
  specialOffer?: boolean;
}
