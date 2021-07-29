
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/auth/authentification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {


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
  admin ;

  onSubmit() {
    const { username, password } = this.signInForm.value
    this.Auth.getAdminbyMail(username).subscribe(user => {
      this.admin =user;
      if (user != null) {
        
          if (this.admin.password == password) {
            localStorage.setItem('logged', 'true')
            this.Auth.emitAuthState()
            this.router.navigate(['/Admin']);
          } else {
            this.alert = "verifier votre mot de passe"
          }
        
      } else {
        this.alert = "Vous n'êtes pas un admin"
      }
    })
  }

}
