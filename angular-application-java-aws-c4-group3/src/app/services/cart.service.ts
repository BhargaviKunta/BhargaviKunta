import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../clasess/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items:Product[]=[];

public productlist=new BehaviorSubject<any>([]);
public cartitem:any=[];

  constructor(private http:HttpClient) { }

  setProduct(product:any){
    this.cartitem.push(...product);
    this.productlist.next(product);
  }
  getProduct(){
    return this.productlist.asObservable();
  }
  
  addToCart(product: any) {
    this.cartitem.push(product);
    this.productlist.next(this.cartitem);
    this.getTotalPrice();
    console.log(this.cartitem)

  }

  getTotalPrice():number {
    let grandtotal=0;
    this.cartitem.map((res:any)=>{grandtotal+=res.total});
    return grandtotal;
  }

  removeCartItem(product:any){

    this.cartitem.map((data:any,index:any)=>{
      if(product.id===data.id){
        this.cartitem.splice(index,1);

      }

    });
    this.productlist.next(this.cartitem);


  }
  clearCart() {
    this.cartitem = [];
    this.productlist.next(this.cartitem);
  }

  checkout(cartitems:any):Observable<any>{
   return this.http.post("http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9096/order/insert",cartitems);
   

  }
}
