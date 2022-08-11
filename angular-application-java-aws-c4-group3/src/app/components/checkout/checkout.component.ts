import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  data:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    let id=localStorage.getItem("userid");
this.api.getOrderByUserid(Number(id)).subscribe(res=>this.data=res);
  }

  cancel(){
    let id=Number(localStorage.getItem("userid"));
    this.api.changeStatus(id,"cancel").subscribe(res=>console.log(res))

  }

  confirm(){
    let id=Number(localStorage.getItem("userid"));
    this.api.changeStatus(id,"confirm").subscribe(res=>console.log(res))
  }



}
