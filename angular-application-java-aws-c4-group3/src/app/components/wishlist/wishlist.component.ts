import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;

  constructor(private wish:WishlistService,private cart:CartService) { }

  ngOnInit(): void {
    this.wish.getProducts().subscribe(res=>
      {
      this.product=res,
      this.grandTotal=this.wish.getTotalPrices();
    });   
  }

  removeItem(data:any){
    this.wish.removewishitems(data);
  }
  emptyWish(){
    this.wish.clearWish();
  }

  addToCart(item:any){
this.cart.addToCart(item);
this.removeItem(item);
alert("item move to cart now.")
  }

}
