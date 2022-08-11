import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../clasess/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl:string="http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9090";
  constructor(private http:HttpClient) { }

getLoggedIn(info:any){
  
  return this.http.post(`${this.baseurl}/user/login`,info);
}


// logged in user
login(token:any,username:any,role:any,id:any){
localStorage.setItem("token",token);
localStorage.setItem("username",username);
localStorage.setItem("role",role);
localStorage.setItem("userid",id);
return true;
}

// login checking
isLogin(){
let token=localStorage.getItem("token");
if(token==undefined || token==='' || token==null){
  return false;
}else{
  return true;
}
}

// logout user
logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  localStorage.removeItem("id");
  return true;
}

// get token
getToken(){
return localStorage.getItem("token");
}
// get Role
getUserRole(){
  return localStorage.getItem("role");
}
//get id
getUserid(){
    return localStorage.getItem("userid");
}
//get username
getUsername(){
      return localStorage.getItem("username");
}

saveUser(user:any){

  return this.http.post("http://https://ec2-54-144-190-226.compute-1.amazonaws.com/:9090/user/insert",user)
}


}
