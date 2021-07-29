import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Flight } from 'src/app/models/flight';
import { Product } from 'src/app/models/product';
import { Store } from 'src/app/models/store';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ProductService } from 'src/app/services/product/product.service';
import { StoreService } from 'src/app/services/store/store.service';
import { StoreDialogComponent } from '../messages/store-dialog/store-dialog.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private router: Router, public ngxSmartModalService: NgxSmartModalService,private adminService :AdminService,private productService :ProductService,private http:HttpClient
   , private storeService: StoreService,private dialog:MatDialog) {}

                 
    update=false;
  cat;
  category;
   subcategory;
  products$: any
  flight: any;
  cities$: any

  store :Store;
  authState = localStorage.getItem('logged')






 productForm = new FormGroup({
    name: new FormControl('', [ Validators.required]),
    price: new FormControl('', [ Validators.required]),
    storeName: new FormControl('', [ Validators.required]),
    category:new FormControl(''),
    subcategory:new FormControl(''),


    ecran:new FormControl(''),
    RAM :new FormControl(''),
  ROM :new FormControl(''),
  Processeur :new FormControl(''),
   Camera :new FormControl(''),
   fcamera :new FormControl(''),
   Systeme :new FormControl(''),
   Batterie:new FormControl(''),




   CARROSSERIE:new FormControl(''),
   nbCYLINDRES	:new FormControl(''),
    ENERGIE	:new FormControl(''),
    PUISSANCEFISCALE	:new FormControl(''),
    PUISSANCE :new FormControl(''),
    COUPLE	:new FormControl(''),
    CYLINDREE:new FormControl(''),
  
  })






  










  
  ngOnInit() {
 
  if(localStorage.getItem('loggedVendor')!='true')this.router.navigate(['/Login'])
    this.storeService.getStore(localStorage.getItem('id')).toPromise().
    then(data => this.store=data).
    then(data =>{console.log(this.store);
      if(this.store.status==false)    this.dialog.open(StoreDialogComponent)
    })
    


    console.log(JSON.stringify(new Store()))
   
  

  }

  fetch = () =>  this.storeService.getStore(localStorage.getItem('id')).subscribe(data => this.store=data)



  onSubmit() {
 
 
     console.log(this.productForm.value)}


  logout() {
    localStorage.removeItem('logged');
    localStorage.removeItem('authState')
    localStorage.removeItem('loggedVendor');
    localStorage.removeItem('id');
    this.router.navigate(["/Login"])
    this.authState = ''
  }


  openModal(modalName: string ) {
   // if (flight) this.flight = flight
    this.ngxSmartModalService.open(modalName)

  }

  closeModal(modalName: string) { this.ngxSmartModalService.close(modalName) }


  onEditSubmit(f: NgForm, id: Number) {
  }
  


  onCreateSubmitf() {
   let vals = this.productForm.value;
 
    console.log(vals)


    this.productService.saveProduct(this.productForm.value,localStorage.getItem('id'),vals.category)
    this.closeModal('createModalVol')
    this.update=!this.update;
    this.onUpload();
    this.fetch()
  }
switcher=()=>console.log(this.category)

 


  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }


  onUpload() {
 // console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);


    this.http.post('http://localhost:8080/upload', uploadImageData)
      .subscribe(data=> console.log(data)
   
      
      );
    
    
    

  }

  getImage(img) {
 //console.log(img)
      
           return 'data:image/jpeg;base64,' +img
        }
    
  









}
