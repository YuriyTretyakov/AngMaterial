import {ProductComponent } from '../product/product.component';
import { NgModule } from '@angular/core';
import {ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        ProductComponent,
      
    ]
    
  })
  export class ProductsModule { }