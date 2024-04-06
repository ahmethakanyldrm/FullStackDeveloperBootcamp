import { CategoryModel } from './../models/category.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  // category search filter
  transform(value: CategoryModel[], search: string): CategoryModel[] {
    return value.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

}
