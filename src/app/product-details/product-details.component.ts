import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
productid:string="";
productinfo!:Product | undefined;
  constructor(private _productservice:ProductsService,private _route:ActivatedRoute){}

  ngOnInit(): void {
      this.productid=this._route.snapshot.params['prodid'];
      this.getproduct()
  }
  getproduct(){
       this._productservice.getproduct(this.productid).subscribe({
        next:(data)=>{
          console.log(data);
          this.productinfo=data;
          },
          error:(eror)=>{
            console.log(eror)
        },
        
      })
    }

    
}
