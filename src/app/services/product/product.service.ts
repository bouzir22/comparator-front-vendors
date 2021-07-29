import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  category;

  constructor(private http :HttpClient) { }
  saveProduct= (p,id,cat) =>
  {console.log(p)
    
    switch(cat) { 
    case "tel": { 
      this.http.post<any>(`http://localhost:8080/product/save/tel `,p).subscribe(data=>console.log(data))
       break; 
    } 
    case"veh": { 
      this.http.post(`http://localhost:8080/product/save/veh `,p).subscribe()
       break; 
    } 
    default: { 
      
       break; 
    } 
 } 
     
 setTimeout(()=>    this.http.post(`http://localhost:8080/product/save/ ${id}/${cat}`,p).subscribe(),2000)

  }
  
 
  getResultSearch =(keyword:string)=> this.http.get(`http://localhost:8080/products/ ${keyword}`)
  getResultSearchScraped =(keyword:string)=> this.http.get(`http://localhost:8080/scrap/ ${keyword}`)
  getPruductsBysubCategory=(sub:String)=>this.http.get(`http://localhost:8080/product/get/${sub}`)




/*** interaction block */
private recievedCategory= new Subject<String>();
recievedCategory$=this.recievedCategory.asObservable();






private profileForm= new Subject<any>();
profileForm$=this.profileForm.asObservable();

sendCategory=(category:String)=>this.recievedCategory.next(category)
sendForm=(form:any)=>this.profileForm.next(form)

/**  /////////////////////////////////////////   */














}
