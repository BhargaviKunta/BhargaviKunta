import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/clasess/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  users:User=new User();


  constructor(private userserv:UserService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.userserv.saveUser(this.users).subscribe(res=>{console.log(res);alert("User added");window.location.reload();})
  }



}
