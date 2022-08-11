import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  public product:any=[]

  constructor(private prodserv:ProductService) { }

  ngOnInit(): void {

    this.prodserv.getProduct().subscribe(res=>{this.product=res});
  }

  deleteProduct(data:any){
    this.prodserv.deleteProduct(data.id).subscribe(res=>{
      alert("product deleted");

      this.product=res;
      window.location.reload();
      

    });
  }

}
