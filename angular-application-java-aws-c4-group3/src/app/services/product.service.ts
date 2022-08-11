import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catagory } from '../clasess/catagory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  // product curd 
getProduct():Observable<any>{
  return this.http.get("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/all");
}

saveProduct(data:any):Observable<any>{
  return this.http.post("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/insert/",data);
}

updateProduct(data:any,id:number){
  return this.http.put("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/update/"+id,data);
}

deleteProduct(id:number):Observable<any>{
  return this.http.delete("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/delete/"+id);
}

// catagory curd 

getCatagory():Observable<any>{
  return this.http.get("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/category/all");
}

saveCatagory(data:any):Observable<any>{
  return this.http.post("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/category/insert/",data);
}

updateCatagory(data:any,id:number){
  return this.http.put("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/category/update/"+id,data);
}

deleteCatagory(id:number){
  return this.http.delete("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/category/delete/"+id);
}

// discount



getCoupon():Observable<any>{
  return this.http.get("http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/all");
}

saveCoupon(data:any):Observable<any>{
  return this.http.post("http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/insert/",data);
}

updateCoupon(data:any,id:number){
  return this.http.put("http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/update/"+id,data);
}

deleteCoupon(id:number){
  return this.http.delete("http://http://ec2-54-144-190-226.compute-1.amazonaws.com/:9092/coupon/delete/"+id);
}

}
