
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/auth/authentification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/services/vendor/vendor.service';
import { StoreService } from 'src/app/services/store/store.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  identifier;

  constructor(private Auth: AuthentificationService, private router: Router,private vendorService : VendorService , private storeService : StoreService) { }

  ngOnInit() {
    //localStorage.setItem('logged', 'true');
  //  if (localStorage.getItem('logged')) this.router.navigate(['/Admin'])
  }

  signUpForm = new FormGroup({
    name: new FormControl('', [ Validators.required]),
    username: new FormControl('', [ Validators.required]),
    storeName: new FormControl('', [ Validators.required]),
    category:new FormControl(''),
    email: new FormControl(''),
     password: new FormControl('', [Validators.minLength(6), Validators.required])
  })

  alert: string



  onSubmit() {
   /* const { username, password } = this.signUpForm.value
    this.Auth.getUserbyMail(username).subscribe(user => {
      if (user != null) {
        if (user.role == "Admin") {
          if (user.password == password) {
            localStorage.setItem('logged', 'true')
            this.Auth.emitAuthState()
            this.router.navigate(['/Admin']);
          } else {
            this.alert = "verifier votre mot de passe"
          }
        } else {
          this.alert = "Vous n'êtes pas un admin"
        }
      } else {
        this.alert = "Vous n'êtes pas un admin"
      }
    })
    */

    console.log(this.signUpForm.value)
   this.vendorService.registerVendor(this.signUpForm.value).subscribe(data =>this.putId(data))
 
  }

  putId(data)
  { console.log(data)
   localStorage.setItem('id',data.id);
   localStorage.setItem('loggedVendor', 'true')
       this.signUpForm.value.vendorId=data.id;
       this.createStore(data.id,this.signUpForm.value)
this.router.navigate(["/store"])
}
  createStore= (id,store)=> {this.storeService.createStore(id,store)}

}
