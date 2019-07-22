import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';
import { ProductCategory } from '../core/enums/product-category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProdcuts = new Array<Product>();

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        name: 'Dress',
        price: 59,
        category: ProductCategory.clothes,
        specialOffer: true
      },
      {
        name: 'Boot',
        price: 75,
        category: ProductCategory.shoes,
        specialOffer: false
      },
      {
        name: 'Belt',
        price: 27,
        category: ProductCategory.accessories,
        specialOffer: false
      }
    ];
  }

  selectProduct(product: Product) {
    this.selectedProdcuts.push(product);
  }

}
