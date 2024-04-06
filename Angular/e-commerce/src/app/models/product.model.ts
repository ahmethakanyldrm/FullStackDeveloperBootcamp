import { CategoryModel } from './category.model';
export class ProductModel {
  id: string = '';
  imageUrl: string = '';
  name: string = '';
  description: string = '';
  stock: number = 0;
  price: number = 0;
  discountedPrice: number = 0;
  kdvRate: KDVRateType = 1;
  categoryId: string = '';
  category: CategoryModel = new CategoryModel();
  quantity: number = 1;
}

export type KDVRateType = 0 | 1 | 10 | 20;
