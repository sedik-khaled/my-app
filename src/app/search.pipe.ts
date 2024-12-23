
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';


@Pipe({
  name: 'search',
standalone:false,
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[],value: string ): Product[] {
    return products.filter((pt)=>pt.category.toLowerCase().includes(value.toLowerCase()));
  }

}