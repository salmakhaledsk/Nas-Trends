import { Component, OnInit } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule, NgFor } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { FormsModule, NgModel } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  catList:Icategory[]=[] as Icategory[];
  product:Iproduct={} as Iproduct;
  constructor(private categoriesService:CategoriesService,private apiServiceService:ApiServiceService,private router:Router){}
  ngOnInit(){
    this.categoriesService.getAllCategories().subscribe({
      next:(data)=>{
        this.catList=data
      },
      error:(err)=>{
        console.log(err);

      },
    })
  }
  trackByFn(index: number, item: Icategory): number {
    return item.id; 
  }

  addNewProduct(){
    this.apiServiceService.addNewProducts(this.product).subscribe((res)=>{
this.router.navigate(['/home'])
    })
    
    }


  }


