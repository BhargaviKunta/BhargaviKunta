import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9091/product/all").pipe(map((res:any)=>{return res}));

  }

}
