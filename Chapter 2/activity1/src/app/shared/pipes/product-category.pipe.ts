import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from 'src/app/core/enums/product-category';

@Pipe({
  name: 'productCategory'
})
export class ProductCategoryPipe implements PipeTransform {

  transform(category: ProductCategory): string {
    if (category === ProductCategory.accessories) {
      return 'Acessories';
    }
    if (category === ProductCategory.clothes) {
      return 'Clothes';
    }
    if (category === ProductCategory.shoes) {
      return 'Shoes';
    }
    return '';
  }

}
