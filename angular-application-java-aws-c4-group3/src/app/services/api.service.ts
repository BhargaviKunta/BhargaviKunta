import { Injectable } from '@angular/core';
import { Product } from '../clasess/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../clasess/order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 orders:Order;

  cartitems:any;

  constructor(private http:HttpClient) { }

  public search(query: string):Observable<any> {
    return this.http.get('http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/search/'+query.search);
  }

  getCoupon():Observable<any> {
    return this.http.get('http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/all');
  }
  getCouponByCode(code:any):Observable<any> {
    return this.http.post('http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/code',code);
  }

//order

getOrderByUserid(id:number):Observable<any> {
  return this.http.get('http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9096/order/'+id);
}

changeStatus(id:number,data:any){

return this.http.post('http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9096/order/status',{'id':id,'status':data});
}








}
