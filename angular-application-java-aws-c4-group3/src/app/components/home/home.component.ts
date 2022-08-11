import { Component, OnInit } from '@angular/core';
import { Catagory } from 'src/app/clasess/catagory';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../clasess/product';
import {HomeService} from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product:any;
cartitem:any=[]

catagory:any;
  

  constructor(private serv:HomeService,private cart:CartService,private prodServ:ProductService) { }

  ngOnInit(): void {
    this.serv.getProduct().subscribe(result => {this.product=result;  
      
      this.product.forEach((a:any)=>{
      Object.assign(a,{total:a.price});
    })});


    this.prodServ.getCatagory().subscribe((res:any)=>{this.catagory=res});
 


  }

  addToCart(item:any){
    this.cart.addToCart(item);
  }

}
