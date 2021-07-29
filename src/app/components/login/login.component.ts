import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/auth/authentification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
  // localStorage.setItem('logged', 'true');
    if (localStorage.getItem('logged')) this.router.navigate(['/Admin'])
  }

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  })

  alert: string
  vendor;

  onSubmit() {
    const { username, password } = this.signInForm.value
    console.log(password)
    this.Auth.getVendorbyMail(username).subscribe(user => { this.vendor=user
      if (user != null) {
        
          if (this.vendor.password == password) {
            localStorage.setItem('loggedVendor', 'true')
            localStorage.setItem('id', this.vendor.id)
            console.log(localStorage.getItem('id'))
            this.Auth.emitAuthState()
            this.router.navigate(['/store']);
          } else {
            this.alert = "verifier votre mot de passe"
          }

        }
      } 
    )
  }

}
