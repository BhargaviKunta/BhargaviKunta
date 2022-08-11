import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/clasess/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:User=new User();
  msg:any;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.auth.saveUser(this.data).subscribe(result=>{this.msg=result;alert(this.msg.message);});
    
  }

}
