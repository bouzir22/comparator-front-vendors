import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AdminComponent } from './components/admin/admin.component';
import { VilleComponent } from './components/ville/ville.component';
import { LoginComponent } from './components/login/login.component';
import { VolComponent } from './components/vol/vol.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { TransportComponent } from './components/transport/transport.component';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { RemainingStoresComponent } from './components/remaining-stores/remaining-stores.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { ProductDetailsComponent } from './components/main/product-details/product-details.component';
import { TestComponent } from './components/main/test/test.component';
import { SmartphonesComponent } from './components/main/smartphones/smartphones.component';
import { SearchComponent } from './components/main/search/search.component';
const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'vols', component: VolComponent },
  { path: 'Ville', component: VilleComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'Admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'reservations', component: ReservationComponent },
  { path: 'store', component: StoreComponent },
  { path: 'products', component: ProductComponent },
  { path: 'stores', component: StoreListComponent },
  { path: 'remaining', component: RemainingStoresComponent},
  { path: 'adminauth', component: LoginAdminComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'sign', component: LoginPageComponent},
  { path: 'acceuil', component: LandingComponent},
  { path: 'details', component: ProductDetailsComponent},
  { path: 'test/:category', component: TestComponent},
  { path: 'smart/:category', component: SmartphonesComponent},
  { path: 'search', component: SearchComponent},



//  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
