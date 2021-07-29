import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgForm } from '@angular/forms';
import { VilleService } from '../../services/ville/ville.service';
import { City } from '../../models/city';
import { AdminService } from 'src/app/services/admin/admin.service';
import { StoreService } from 'src/app/services/store/store.service';




@Component({
  selector: 'app-remaining-stores',
  templateUrl: './remaining-stores.component.html',
  styleUrls: ['./remaining-stores.component.css']
})
export class RemainingStoresComponent implements OnInit {

  constructor(private citiesService: VilleService, public ngxSmartModalService: NgxSmartModalService,private storeService : StoreService) { }

  cities$: City[]
  store;
  displayedColumns: string[] = ['name','owner', 'actions'];
  stores;
  status=false ;
  remainingStores;

  ngOnInit() { 
    //this.citiesService.getAll().subscribe(data => this.cities$ = data) 
    this.storeService.getRemaining().subscribe(data =>{this.stores= data;this.filter()})
  
  
  }
  filter=()=> {this.remainingStores=this.stores.filter(s=> s.status==false);}

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




