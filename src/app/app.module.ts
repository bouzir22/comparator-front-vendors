import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSlideToggle } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { VilleComponent } from './components/ville/ville.component';
import { LoginComponent } from './components/login/login.component';
import { VolComponent } from './components/vol/vol.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { TransportComponent } from './components/transport/transport.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NotifierModule } from 'angular-notifier';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { RemainingStoresComponent } from './components/remaining-stores/remaining-stores.component';
import { LoginVendorComponent } from './components/login-vendor/login-vendor.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreDialogComponent } from './components/messages/store-dialog/store-dialog.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { ProductDetailsComponent } from './components/main/product-details/product-details.component';
import { TestComponent } from './components/main/test/test.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SmartphonesComponent } from './components/main/smartphones/smartphones.component';
import { SearchComponent } from './components/main/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    AdminComponent,
    VilleComponent,
    LoginComponent,
    VolComponent,
    ReservationComponent,
    HotelComponent,
    TransportComponent,
    FilterPipe,
    StoreComponent,
    ProductComponent,
    StoreListComponent,
    VendorListComponent,
    RemainingStoresComponent,
    LoginVendorComponent,
    LoginAdminComponent,
    SignupComponent,
    StoreDialogComponent,
    LoginPageComponent,
    LandingComponent,
    ProductDetailsComponent,
    TestComponent,
     SmartphonesComponent,
     SearchComponent

  ],entryComponents:[StoreDialogComponent],
  imports: [
    NgxSmartModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCheckboxModule,
    NotifierModule,
    MatSlideToggleModule,MatRadioModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
