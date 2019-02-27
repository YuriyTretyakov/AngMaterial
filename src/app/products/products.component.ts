import { Component,OnInit,OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import {Subscription} from 'rxjs';
    
@Component(
    {
        selector:'app-products',
        templateUrl:"./products.component.html"
    }
)
export class ProductsComponent{

    productName = 'A Book';
    products = [];
    private productsSubscription:Subscription;

    constructor(private productsService:ProductsService){
      this.products=productsService.getProducts();
    }

    onAddProduct(form) {
        if (form.valid)
        {
            this.productsService.addProduct(form.value.productName);
        }
      }
    
      onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
      }

    ngOnInit(){
        this.productsSubscription
        this.products=this.productsService.getProducts();
        this.productsService.productsUpdated.subscribe(()=>{
        this.products=this.productsService.getProducts();
        });
    }

    ngOnDestroy(){
        this.productsSubscription.unsubscribe();
    }
}