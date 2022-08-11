import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/clasess/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:Product[];
  constructor(private prod:ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(data:string){
    this.prod.search(data).subscribe(result=>{this.products=result});
  
  }
}
