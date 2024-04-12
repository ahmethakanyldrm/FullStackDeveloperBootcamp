import { KDVRateType } from "./product.model";

export class OrderModel {
  id: string = "";
  orderNumberPrefix: string = "";
  orderNumberSuffix: number = 0;
  orderNumber: string = "";
  productName: string = "";
  productDescription: string = "";
  price:number = 0;
  quantity:number = 0;
  date: string = "";
  kdvRate: KDVRateType = 0;
  imageUrl: string = "";
  totalAmount: number = 0;
  totalKdv: number = 0;
  total:number = 0;

}