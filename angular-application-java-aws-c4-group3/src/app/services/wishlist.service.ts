import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public productitems=new BehaviorSubject<any>([]);
public wishitems:any=[];

  constructor() { }
  setProducts(product:any){
    this.wishitems.push(...product);
    this.productitems.next(product);
  }
  getProducts(){
    return this.productitems.asObservable();
  }
  
  addToWish(product: any) {
    this.wishitems.push(product);
    this.productitems.next(this.wishitems);
    this.getTotalPrices();
    console.log(this.wishitems)

  }

  getTotalPrices():number {
    let grandtotal=0;
    this.wishitems.map((res:any)=>{grandtotal+=res.total});
    return grandtotal;
  }

  removewishitems(product:any){

    this.wishitems.map((data:any,index:any)=>{
      if(product.id===data.id){
        this.wishitems.splice(index,1);

      }

    });
    this.productitems.next(this.wishitems);


  }
  clearWish() {
    this.wishitems = [];
    this.productitems.next(this.wishitems);
  }
}
