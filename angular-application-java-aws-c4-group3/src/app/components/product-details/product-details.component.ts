import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/clasess/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }
  addToCart(product: Product) {
    this.cart.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
