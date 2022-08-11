import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  constructor(private http:HttpClient,
    private auth:AuthService,
    private cart:CartService,
    private wish:WishlistService
    ) { }

  public totalCartItem:number=0;
  public totalWishItem:number=0;

  islogin=false;
 public username:any;
 

  ngOnInit(): void {
    this.islogin=this.auth.isLogin();
    
    this.cart.getProduct().subscribe(res=>{this.totalCartItem=res.length});
    this.wish.getProducts().subscribe(res=>{this.totalWishItem=res.length});
    this.username=this.auth.getUsername();
  }

logout(){
this.auth.logout();
location.reload();
}

}
