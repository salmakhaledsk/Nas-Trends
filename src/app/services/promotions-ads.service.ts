import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionsAdsService {
  ads:string[] 

  constructor() {
    this.ads = [
      'Buy 1 Get 1 Free',
      '50% Off on all items',
      'Free Shipping on orders over $50',
      'Buy 2 Get 1 Free',
      '20% Off on your first purchase',

    ];
   }
   getAds(){
    // return observable<str>
    }
}
