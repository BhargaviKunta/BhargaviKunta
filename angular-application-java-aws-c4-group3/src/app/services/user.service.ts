import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
id:number=0;
  constructor(private http:HttpClient) { 

    
  }

  //user crud

getUser():Observable<any>{
  return this.http.get("http://ec2-54-144-190-226.compute-1.amazonaws.com:9090/user/all");
}

saveUser(data:any):Observable<any>{
  return this.http.post("http://ec2-54-144-190-226.compute-1.amazonaws.com:9090/user/insert/",data);
}

updateUser(data:any,id:number){
  return this.http.put("http://ec2-54-144-190-226.compute-1.amazonaws.com:9090/user/update/"+id,data);
}

deleteUser(id:number){
  return this.http.delete("http://ec2-54-144-190-226.compute-1.amazonaws.com:9090/user/delete/"+id);
}


}
