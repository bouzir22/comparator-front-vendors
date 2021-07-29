import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http : HttpClient) { }


  registerVendor =(vendor)=> this.http.post('http://localhost:8080/vendor/save',vendor)
}
