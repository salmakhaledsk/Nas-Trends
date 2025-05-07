import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  productId:number=0
  productsIds!:number[]
  product:Iproduct |null= null 
  constructor(private activatedRouter:ActivatedRoute,private productService:StaticProductsService,private location:Location,private router:Router) {

   }
ngOnInit() {


  // console.log(params)
    this.productId= Number(this.activatedRouter.snapshot.paramMap.get('id'));
   this.activatedRouter.paramMap.subscribe((params)=>{
    this.productId= Number(params.get('id'));
    // console.log(this.productId)
    this.product=this.productService.getProductById(this.productId);
    // console.log(this.product)

   })
//3mltha 3lshan prev button
this.productsIds= this.productService.getproductsIds()
}


goBack(){
  // window.history.back();
  this.location.back();
}
Previous(){
 this.productsIds= this.productService.getproductsIds()
  let index= this.productsIds.indexOf(this.productId)
  // console.log(productsIds[--currentIndex]);
  this.router.navigateByUrl(`/details/${this.productsIds[--index]}`)

  
}
Next(){
  this.productsIds= this.productService.getproductsIds()
  let index= this.productsIds.indexOf(this.productId)
  // console.log(productsIds[++currentIndex]);
  this.router.navigateByUrl(`/details/${this.productsIds[++index]}`)
}
}
