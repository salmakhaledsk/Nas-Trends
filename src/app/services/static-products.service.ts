import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
products:Iproduct[]
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Black Sweetshirt',
        quantity: 10,
        price: 100,
        imgUrl: 'https://www.nastrends.com/cdn/shop/files/14_e4391e5f-37ff-4288-a3c3-a20e49c8d958_540x.jpg?v=1739804684',
        catId: 1
      },
      {
        id: 200,
        name: ' S Scarfes',
        quantity: 0,
        price: 200,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/SignatureTiara_4_540x.jpg?v=1620128408',
        catId: 2
      },
      {
        id: 300,
        name: 'B Bages',
        quantity: 30,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/files/51_1721075e-5b2a-481f-a076-07b4e42bd258.jpg?v=1693396635',
        catId: 3
      },
      {
        id: 400,
        name: 'S Sweetshirt',
        quantity: 30,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/files/19_5786fed1-1262-4540-8298-1406c78e61ac_540x.jpg?v=1739804687',
        catId: 1
      },
      {
        id: 500,
        name: 'S Scarfes',
        quantity: 30,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/BlueVintage_4_540x.jpg?v=1620127349',
        catId: 2
      },
      {
        id: 600,
        name: 'B Bages',
        quantity: 30,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/1_c4d7c5f6-c3a9-4f30-9087-c53a76faf581_540x.jpg?v=1678351875',
        catId: 3
      },
      {
        id: 700,
        name: 'S Sweetshirt',
        quantity: 30,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/111_7_540x.jpg?v=1739804770',
        catId: 1
      },
      {
        id: 800,
        name: 'S Scarfes',
        quantity: 1,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/FreeSpiritinnavy_2_540x.jpg?v=1620127626',
        catId: 2
      },
      {
        id: 900,
        name: 'B Bages',
        quantity: 0,
        price: 300,
        imgUrl: 'https://www.nastrends.com/cdn/shop/products/38_540x.jpg?v=1693396635',
        catId: 3
      }
    ];
   }
   getAllProducts():Iproduct[]{
    return this.products
   }
   getProductById(id:number):Iproduct|null{

   let product= this.products.find((prd)=> prd.id==id)
   return product?product:null
   }
   getProductsByCatId(catId:number):Iproduct[]{
   return this.products.filter((prd)=> prd.catId==catId)
   
   }
   //3lshan next w prev wrok
   getproductsIds():number[]{
    return this.products.map((prd)=> prd.id)
  }

}
