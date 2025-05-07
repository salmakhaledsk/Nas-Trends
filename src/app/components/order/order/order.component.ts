import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "../../products/products.component";
import { Icategory } from '../../../models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsComponent,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCatId:number=1
  categories:Icategory[];
  totalOrderPrice:number=0

  // @ViewChild('userName') inp!: ElementRef;
  // 
  // non null asseertion operator
  constructor(){
    this.categories=[
      {id:1,name:'Sweetshirt'},
      {id:2,name:'Scarfes'},
      {id:3,name:'Bages'}
    ]
  }
  viewTotalPrice(top:number){
    this.totalOrderPrice+=top

  }

  ngAfterViewInit(){
  // console.log(this.inp.nativeElement.value) 
  }
}
