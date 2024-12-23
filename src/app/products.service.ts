import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // posts:any[]=[]
  constructor(private _httpClient:HttpClient) { 
    this.getposts()
  }

  getposts():Observable<any>{
    return this._httpClient.get<any[]>("https://fakestoreapi.com/products")
  }
  getproduct(id:string):Observable<any>{
    return this._httpClient.get<any[]>(`https://fakestoreapi.com/products/${id}`)
  }
}
