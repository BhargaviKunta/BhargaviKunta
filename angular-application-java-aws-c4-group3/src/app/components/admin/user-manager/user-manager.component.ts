import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/clasess/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  public users:User=new User();

  public user:any;
  constructor(private userserv:UserService) { }

  public id:number=0;
  ngOnInit(): void {
    this.userserv.getUser().subscribe(res=>{this.user=res});
  }


  setdata(data:any){
this.users.firstname=data.firstname;
this.users.lastname=data.lastname;
this.users.email=data.email;
this.users.mobile=data.mobile;
this.id=data.id;
this.users.role=data.role;
this.users.username=data.username;
this.users.password=data.password;
  }
edit(){
  this.userserv.updateUser(this.users,this.id).subscribe(res=>{alert("updated");window.location.reload();});
}

  deleteone(data:any){
    this.userserv.deleteUser(data.id).subscribe(res=>{alert("deleted");window.location.reload();})
  }
  save(): void{
    this.userserv.saveUser(this.users).subscribe(res=>{console.log(res);alert("catagory added");window.location.reload();})
  }

}
