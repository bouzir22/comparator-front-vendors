
import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgForm } from '@angular/forms';
import { VilleService } from '../../services/ville/ville.service';
import { City } from '../../models/city';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {


  constructor(private citiesService: VilleService, public ngxSmartModalService: NgxSmartModalService,private adminService: AdminService) { }

  cities$: City[]
  store;
  displayedColumns: string[] = ['name','date','owner', 'actions'];
  stores;
  status=false ;

  ngOnInit() { 
    //this.citiesService.getAll().subscribe(data => this.cities$ = data) 
    this.adminService.getStores().subscribe(data =>this.stores= data )
  
  
  }
  toggle=(id)=> {this.adminService.activateSore(id) ; console.log(id);}

  openModal(modalName: string, store) {
    if (store) this.store = store
    this.ngxSmartModalService.open(modalName)
  }

  closeModal(modalName: string) { this.ngxSmartModalService.close(modalName) }

  removeCity(city: City) {
    this.citiesService.delete(city.id).subscribe(
      () => this.citiesService.getAll().subscribe(data => this.cities$ = data))
  }

  onEditSubmit(f: NgForm, id: Number) {
    const city = new City()
    city.name = f.value.namecity
    city.id = id;
    this.citiesService.update(city).subscribe(() =>
      this.citiesService.getAll().subscribe(data => {
        this.cities$ = data
        this.closeModal('editModalVille')
      }))
  }

  onCreateSubmit(f: NgForm) {
    this.citiesService.create(f.value.namecity).subscribe(() =>
      this.citiesService.getAll().subscribe(data => {
        this.cities$ = data
        this.closeModal('createModalVille')
        f.reset()
      }))
  }

}
