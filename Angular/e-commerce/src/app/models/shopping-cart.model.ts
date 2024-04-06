import {CategoryModel} from "./category.model";
import {KDVRateType} from "./product.model";

export class ShoppingCartService {
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