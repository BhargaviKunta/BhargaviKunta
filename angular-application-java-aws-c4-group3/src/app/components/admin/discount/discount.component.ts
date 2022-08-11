import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/clasess/discount';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  coupon:Discount=new Discount();
  data:any;
  id:number=0;
updatebtn=false;
addbtn=true;
  constructor(private prodserv:ProductService) { }

  ngOnInit(): void {
    this.prodserv.getCoupon().subscribe(res=>{this.data=res;})
  }



  setdata(item:any){
    this.coupon.code=item.code;
    this.coupon.description=item.description;
    this.coupon.type=item.type;
    this.coupon.percentage=item.percentage;
    this.id=item.id;
    this.updatebtn=true;
    this.addbtn=false;
   
  }
edit(){
  this.prodserv.updateCoupon(this.coupon,this.id).subscribe(res=>{alert("updated");window.location.reload();});
}

  deleteone(data:any){
    this.prodserv.deleteCoupon(data.id).subscribe(res=>{alert("deleted");window.location.reload();})
  }
  save(): void{
    
    this.prodserv.saveCoupon(this.coupon).subscribe(res=>{console.log(res);alert("coupon added");window.location.reload();})
  }
}
