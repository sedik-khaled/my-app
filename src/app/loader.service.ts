import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isloading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)

  show(){
    this.isloading.next(true)
  }
  hide(){
    this.isloading.next(false)
  }
}
