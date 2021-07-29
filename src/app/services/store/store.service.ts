import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoreService {



  constructor(private http: HttpClient) { }

  getStore= (id) => this.http.get<any>(`http://localhost:8080/store/getByUser/${id}`);

  createStore=(id,store)=> this.http.post(`http://localhost:8080/store/create/${id}`,store).subscribe()
  getRemaining =() => this.http.get('http://localhost:8080/store/remaining')


   





}
