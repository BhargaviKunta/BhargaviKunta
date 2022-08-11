import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Product } from '../product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{
  product:Product;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private productservice: HttpClientService) {
  { this.product = new Product();}
      }

  onSubmit() {
    this.productservice.save(this.product).subscribe(result => this.gotoProdList());
  }

  gotoProdList() {
    this.router.navigate(['/products']);
  }

}
