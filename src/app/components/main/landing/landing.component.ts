import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  keyword;
  Scrapedproducts;
  localProducts;
  


  constructor( private productService:ProductService,private router:Router) { }

















  ngOnInit() {
  }
  category;
  expression="tel";
switcher=(cat)=>{this.expression=cat;console.log(this.expression)}
change= cat=>this.category=cat

  search=() => { 
    this.productService.getResultSearch(this.keyword).subscribe(data=>console.log(data))
                this.productService.getResultSearchScraped(this.keyword).subscribe(data=>this.Scrapedproducts=data)
              }


show=(product)=>this.router.navigate(['/details'], {queryParams:{ data: JSON.stringify(product)} }    
);







}
