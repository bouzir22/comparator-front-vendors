import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/models/store';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  products;

  constructor(private http: HttpClient) { 
     this.getProducts()


  }

 

  getVendors =()  => this.http.get("http://localhost:8080/vendor/all");
  getProducts =() => this.http.get("http://localhost:8080/product/all");
  getStores = ():Observable<Store[]> => this.http.get<Store[]>("http://localhost:8080/store/all");
  activateSore=(id) => { this.http.get("http://localhost:8080/admin/activate/"+id).subscribe() ;console.log("from service"+id);}


}
