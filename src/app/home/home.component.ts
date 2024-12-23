import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {  Product } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  cacelrequest!:Subscription;
posts:Product[]= [];
searchTerm:string='';
constructor(private _productsService: ProductsService){}

ngOnInit(): void {
  this.getallposts()
}
getallposts(){
  this._productsService.getposts().subscribe({
    next:(data)=>{
      if(data?.length){
        this.posts=data;
      }
        console.log(data)
    },

      
    error:(error)=>console.log(error),
    complete:()=>console.log("complete")
  }
  )
}

}
