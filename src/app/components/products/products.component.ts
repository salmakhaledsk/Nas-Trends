import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { BorderImageDirective } from '../../directives/border-image.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { error } from 'console';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,BorderImageDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush, 
})
export class ProductsComponent implements OnInit {
  products:Iproduct[] =[];
  
  // selectedCatId:number=1
  totalOrderPrice:number=0
  filterdProducts:Iproduct[] =[]
  mydate:Date=new Date()
  @Input() recivedSelectedCatId:number=1
  @Output()  onTotalPriceChanged:EventEmitter<number>



  // hna awel elservice
  // prdService:StaticProductsService
  constructor(public apiserviceservice:ApiServiceService,
    private router:Router)
    { 
    
    this.onTotalPriceChanged=new EventEmitter<number>()
   }
   ngOnInit() {
    this.apiserviceservice.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filterdProducts = data; // Initialize filterdProducts with all products
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

buy(price:number,count:string){
  // this.totalOrderPrice+=price*parseInt(count)
  this.totalOrderPrice+=price* +count
this.onTotalPriceChanged.emit(this.totalOrderPrice)

}

trackByFn(i:number,prd:Iproduct){
  return prd.id
}
ngOnChanges() {
// this.filterProducts()
this.apiserviceservice.getProductsByCatId(this.recivedSelectedCatId).subscribe((data)=>{
  this.filterdProducts=data
})
}
// filterProducts(){
//   this.filterdProducts = this.products.filter((prd)=>prd.catId==this.recivedSelectedCatId)
// }
// mn el parent to child prodects ts
// goToDetails(id:number){

// this.router.navigate(['/details',id])
// }
}





















//static products component

// import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, output } from '@angular/core';
// import { Iproduct } from '../../models/iproduct';
// import { CommonModule } from '@angular/common';
// import { Icategory } from '../../models/icategory';
// import { FormsModule } from '@angular/forms';
// import { BorderImageDirective } from '../../directives/border-image.directive';
// import { StaticProductsService } from '../../services/static-products.service';
// import { Router, RouterLink } from '@angular/router';


// @Component({
//   selector: 'app-products',
//   imports: [CommonModule,FormsModule,BorderImageDirective,RouterLink],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css',
//   // changeDetection:ChangeDetectionStrategy.OnPush, 
// })
// export class ProductsComponent implements OnInit,OnChanges {
//   products:Iproduct[]
//   // selectedCatId:number=1
//   totalOrderPrice:number=0
//   filterdProducts:Iproduct[] 
//   // mydate:Date=new Date()
//   @Input() recivedSelectedCatId:number=1
//   @Output()  onTotalPriceChanged:EventEmitter<number>



//   // hna awel elservice
//   // prdService:StaticProductsService
//   constructor(public prdService:StaticProductsService,private router:Router){ 

  
//     // this.products = [
//     //   {
//     //     id: 100,
//     //     name: 'Black Sweetshirt',
//     //     quantity: 10,
//     //     price: 100,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/files/14_e4391e5f-37ff-4288-a3c3-a20e49c8d958_540x.jpg?v=1739804684',
//     //     catId: 1
//     //   },
//     //   {
//     //     id: 200,
//     //     name: ' S Scarfes',
//     //     quantity: 0,
//     //     price: 200,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/SignatureTiara_4_540x.jpg?v=1620128408',
//     //     catId: 2
//     //   },
//     //   {
//     //     id: 300,
//     //     name: 'B Bages',
//     //     quantity: 30,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/files/51_1721075e-5b2a-481f-a076-07b4e42bd258.jpg?v=1693396635',
//     //     catId: 3
//     //   },
//     //   {
//     //     id: 400,
//     //     name: 'S Sweetshirt',
//     //     quantity: 30,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/files/19_5786fed1-1262-4540-8298-1406c78e61ac_540x.jpg?v=1739804687',
//     //     catId: 1
//     //   },
//     //   {
//     //     id: 500,
//     //     name: 'S Scarfes',
//     //     quantity: 30,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/BlueVintage_4_540x.jpg?v=1620127349',
//     //     catId: 2
//     //   },
//     //   {
//     //     id: 600,
//     //     name: 'B Bages',
//     //     quantity: 30,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/1_c4d7c5f6-c3a9-4f30-9087-c53a76faf581_540x.jpg?v=1678351875',
//     //     catId: 3
//     //   },
//     //   {
//     //     id: 700,
//     //     name: 'S Sweetshirt',
//     //     quantity: 30,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/111_7_540x.jpg?v=1739804770',
//     //     catId: 1
//     //   },
//     //   {
//     //     id: 800,
//     //     name: 'S Scarfes',
//     //     quantity: 1,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/FreeSpiritinnavy_2_540x.jpg?v=1620127626',
//     //     catId: 2
//     //   },
//     //   {
//     //     id: 900,
//     //     name: 'B Bages',
//     //     quantity: 0,
//     //     price: 300,
//     //     imgUrl: 'https://www.nastrends.com/cdn/shop/products/38_540x.jpg?v=1693396635',
//     //     catId: 3
//     //   }
//     // ];
//     //hna 3mltha bdl el array elli fo2
//     this.products = this.prdService.products

  
//     this.filterdProducts = this.products
//     // console.log(this.filterdProducts)
//     this.onTotalPriceChanged=new EventEmitter<number>()
//    }
//   ngOnInit()
//   {
   
//   }

// buy(price:number,count:string){
//   // this.totalOrderPrice+=price*parseInt(count)
//   this.totalOrderPrice+=price* +count
// this.onTotalPriceChanged.emit(this.totalOrderPrice)

// }

// trackByFn(i:number,prd:Iproduct){
//   return prd.id
// }
// ngOnChanges() {
// // this.filterProducts()
//  this.filterdProducts= this.prdService.getProductsByCatId(this.recivedSelectedCatId)
// }
// // filterProducts(){
// //   this.filterdProducts = this.products.filter((prd)=>prd.catId==this.recivedSelectedCatId)
// // }
// // mn el parent to child prodects ts
// // goToDetails(id:number){

// // this.router.navigate(['/details',id])
// // }
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
