import { Component, OnInit } from '@angular/core';
import { Catagory } from 'src/app/clasess/catagory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-catagory',
  templateUrl: './add-product-catagory.component.html',
  styleUrls: ['./add-product-catagory.component.css']
})
export class AddProductCatagoryComponent implements OnInit {

  category={
    'name':'',
    'description':'',
    
  };
  id:number=0;
  updatebtn=false;
  addbtn=true;


  getCatagory:any;

  constructor(private prodserv:ProductService) { }

  ngOnInit(): void {
    this.prodserv.getCatagory().subscribe(res=>{this.getCatagory=res;});
    this.updatebtn=false;
    this.addbtn=true;
  }
  setdata(data:any){
    this.category.name=data.name;
    this.category.description=data.description;
    this.id=data.id;
    this.updatebtn=true;
    this.addbtn=false;
   
  }
edit(){
  this.prodserv.updateCatagory(this.category,this.id).subscribe(res=>{alert("updated");window.location.reload();});
}

  deleteone(data:any){
    this.prodserv.deleteCatagory(data.id).subscribe(res=>{alert("deleted");window.location.reload();})
  }
  save(): void{
    console.log(this.category);
    this.prodserv.saveCatagory(this.category).subscribe(res=>{console.log(res);alert("catagory added");window.location.reload();})
  }



}
