import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/clasess/discount';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import {Order} from '../../clasess/order';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders=new Order();
  public products:any=[];
  public grandTotal!:number;
  //coupon
  code={
    'code':''
  };
  data:Discount;
 once:boolean=true;
 
  constructor(private cart:CartService,private wish:WishlistService,private api:ApiService) { }
  ngOnInit(): void {

    this.cart.getProduct().subscribe(res=>
      {
      this.products=res,
      
      this.grandTotal=this.cart.getTotalPrice();
    });  

  }
removeItem(data:any){
  this.cart.removeCartItem(data);
}
emptycart(){
  this.cart.clearCart();
}

moveToWishlist(data:any){
this.wish.addToWish(data);
this.cart.removeCartItem(data);
alert("item move to wishlist.")
}

applyCoupon(){
this.api.getCouponByCode(this.code).subscribe(res=>{
  if(res.type=="flat"){
    this.grandTotal-=res.percentage;
    }else{
      this.grandTotal-= (this.grandTotal*res.percentage)/100
    }
this.once=false;

});



}

checkout(){
  let uid=localStorage.getItem("userid");
  this.orders.product=this.products;
  this.orders.userid=Number(uid);
  this.orders.quantity=this.products.length;
  this.cart.checkout(this.orders).subscribe(res=>{window.location.href="/checkout"});
 
}

addtocart(data:any){
  this.cart.addToCart(data);
}
removefromcart(data:any){
  this.cart.removeCartItem(data);
}

}
