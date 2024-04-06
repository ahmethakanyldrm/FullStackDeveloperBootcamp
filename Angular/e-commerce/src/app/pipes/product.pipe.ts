import { CategoryModel } from './../models/category.model';
import { ProductModel } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(value: ProductModel[], categoryId: string, search:string): ProductModel[] {
    if (search === "" && categoryId === "") {
      return value;
    }

    if (categoryId !== "") {
      value = value.filter(p=> p.categoryId === categoryId);
    }

    if (search !== ""){
      value = value.filter(
        p=> p.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        p.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
        p.price.toString().includes(search.toLocaleLowerCase()) ||
        p.discountedPrice.toString().includes(search) ||
        p.stock.toString().includes(search)
      )
    }
    return value;
  }

}
