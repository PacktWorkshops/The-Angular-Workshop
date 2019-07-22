import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  clickProduct() {
    this.selected.emit(this.product);
  }

}
