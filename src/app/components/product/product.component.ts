import { Component, OnInit } from '@angular/core';

import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotels/hotel.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { VilleService } from '../../services/ville/ville.service';
import { City } from '../../models/city';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Store } from 'src/app/models/store';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  hotels$: Hotel[]
  hotel: Hotel
  cities$: City[]
  displayedColumns: string[] = ['name', 'price', 'city', 'actions'];
  ////////////////////////////////
   stores:Store[];
  vendors ;
  products ;

  ////////////////////////////////

  constructor(private cityService: VilleService,
    private hotelService: HotelService,
    public ngxSmartModalService: NgxSmartModalService,
    private adminService:AdminService
    ) { }

  ngOnInit() {
    
    
   // this.cityService.getAll().subscribe(data => (this.cities$ = data))
   // this.hotelService.getAll().subscribe(data => (this.hotels$ = data))
   // this.hotels$=[{id:5,name:"h1",price:55,city:null}]
    
    //this.dispatch();
    //console.log(this.products
    this.adminService.getProducts().subscribe(data =>this.products=data);
    //this.adminService.getStores().subscribe(data =>{this.stores=data
      
    //  this.extract()} )
      
      

   

  }
  extract=()=> { 
    while(true)
    {this.stores.forEach(s => s.products.forEach(p=>this.products.push(p)));
    if(this.products) break;}
    
    console.log(this.products)}

//dispatch = ()=>   this.vendors.forEach(v=> v.store.products.forEach(p=>{this.products.push(p) ;console.log(p)}))










  openModal(modalName: string, hotel?: Hotel) {
    if (hotel) this.hotel = hotel
    this.ngxSmartModalService.open(modalName)
  }

  closeModal(modalName: string) { this.ngxSmartModalService.close(modalName) }

  removeHotel(hotel: Hotel) {
    this.hotelService.delete(hotel.id).subscribe(
      () => this.hotelService.getAll().subscribe(data => this.hotels$ = data))
  }

  onEditSubmit(f: NgForm, id: Number) {
    const city = new City()

    const cityIndex = this.cities$.findIndex(el => el.id == f.value.city)

    city.id = f.value.city
    city.name = this.cities$[cityIndex].name
    const hotel = new Hotel();
    hotel.id = id;
    hotel.city = city;
    hotel.price = f.value.price
    hotel.name = f.value.name

    this.hotelService.update(hotel).subscribe(() =>
      this.hotelService.getAll().subscribe(data => {
        this.hotels$ = data
        this.closeModal('editModalHotel')
      }))
  }

  onCreateSubmit(f: NgForm) {
    const city = new City();
    const cityIndex = this.cities$.findIndex(el => el.id == f.value.city)
    city.id = f.value.city
    city.name = this.cities$[cityIndex].name
    const hotel = new Hotel();
    hotel.city = city;
    hotel.price = f.value.price
    hotel.name = f.value.name

    this.hotelService.create(hotel).subscribe(() =>
      this.hotelService.getAll().subscribe(data => {
        this.hotels$ = data
        this.closeModal('createModalHotel')
        f.reset()
      }))
  }



}
