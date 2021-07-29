import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
products;

  constructor(private service:ProductService,private route:ActivatedRoute) { }


  form = new FormGroup({
prix : new FormControl('') ,
ram : new FormControl('') ,
ecran: new FormControl('') ,
camera:new FormControl('')



  })

  fetch=()=>{this.service.getPruductsBysubCategory(this.route.snapshot.paramMap.get("category")).subscribe(data=>this.products=data)}

  ngOnInit() {
    this.fetch()
    
  }

}
