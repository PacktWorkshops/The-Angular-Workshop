import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ProductCategoryPipe } from './pipes/product-category.pipe';
import { SpecialOfferDirective } from './directives/special-offer.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    ProductCategoryPipe,
    SpecialOfferDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ProductCategoryPipe,
    SpecialOfferDirective
  ]
})
export class SharedModule { }
