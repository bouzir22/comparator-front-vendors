import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prdct;
  image;
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params=>{this.prdct=JSON.parse(params.data)
    this.image=this.prdct.image}
    
    )
  }


change=(img)=>this.image=img;


}
