import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopforhome';

role:any
isAdmin=false;
isConsumer=true;
constructor() { }

ngOnInit(): void {
this.role=localStorage.getItem("role");
if(this.role=="admin"){
  this.isAdmin=true;
  this.isConsumer=false;
}else{
  this.isAdmin=false;
  this.isConsumer=true;
}
}



}
