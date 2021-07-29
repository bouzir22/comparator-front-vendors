import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  category;
  products;
  form;
  notfiltred;
  test;

  
 fetch=()=>{this.service.getPruductsBysubCategory(this.route.snapshot.paramMap.get("category")).toPromise().then(data=>this.extract(data,this.form))}
  constructor(private route:ActivatedRoute,private router:Router,private service:ProductService) {
 
              


        
        
        
      



   // this.extract(this.proudcts,this.form)



    
  //this.data=this.route.getCurrentNavigation().extras.state;
  }

  ngOnInit() {

      //debugger;
      //this.fetch()
      
     


      


this.service.profileForm$.subscribe(form=>
  {   
    this.form=form})

    this.fetch()






  
        }
        









        extract=(data ,caracts)=>{

          if  ( this.route.snapshot.paramMap.get("category") == "smartphone"){
            console.log("from sp")
            

            let s=new Subject<any>();
            let tableau=data.filter(p=>p.telephonie.ram==caracts.ram && p.telephonie.ecran==caracts.ecran);
            let tableau$=s.asObservable();
            tableau.next(tableau).subscrib(data=>this.products=data)
            
        console.log(this.products) 

          }

        }
  
     
        
          








    
    
 
  
  }










  





/*







*/