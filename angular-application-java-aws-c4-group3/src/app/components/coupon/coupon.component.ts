import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/clasess/discount';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  items:Discount[]=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCoupon().subscribe((result)=>{this.items=result});
  }
 


}
