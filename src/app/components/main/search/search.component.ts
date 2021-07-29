import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  //category=this.service.category;
  @Input()  category ;

 
  constructor(private service : ProductService,private router:Router) { }

  ngOnInit() {
  }



filtrer=()=>console.log(this.profileForm.value.min);

  profileForm = new FormGroup({
   min : new FormControl(''),
    max: new FormControl(''),



  ram: new FormControl(''),
  sys: new FormControl(''),
  ecran: new FormControl(''),  
  camera: new FormControl(''),  



 carosserie:  new FormControl(''),
 boite: new FormControl(''),
 cylindree: new FormControl(''),  
 kilometrage: new FormControl(''),
 annee: new FormControl(''),  




});


naviger=()=> {
  this.service.sendCategory(this.category);
  this.service.sendForm(this.profileForm.value)
  this.router.navigate(['smart',this.category])
}
//








}
