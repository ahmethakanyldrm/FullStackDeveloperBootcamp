import { CategoryModel } from "./category.model";
import { KDVRateType } from "./product.model";

export class ShoppingCartModel{
    id: string | undefined = "";
    productId: string = "";
    imageUrl: string = "";
    name: string = "";
    description: string = "";
    price: number = 0;
    discountedPrice: number = 0;
    kdvRate: KDVRateType = 1;
    categoryId: string = "";
    category: CategoryModel = new CategoryModel();
    quantity:number = 1;
}