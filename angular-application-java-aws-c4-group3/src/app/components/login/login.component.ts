import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
info={
  "username":"",
  "password":""
}

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

loginUser(){
if((this.info.username!=null && this.info.password!=null)&&(this.info.username!='' && this.info.password!='')){
this.auth.getLoggedIn(this.info).subscribe((response:any)=>{this.auth.login(response.token,response.username,response.role,response.id);
  if(response.role=="admin"){
  window.location.href="/dashboard";}else{
    window.location.href="/";
  }
});

}
}

}
