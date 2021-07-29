import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthentificationService } from '../../services/auth/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private router: Router, private authService: AuthentificationService) { }

  authState = localStorage.getItem('logged')
  isLogged =localStorage.getItem('loggedVendor');

  logout() {
    localStorage.removeItem('logged');
    localStorage.removeItem('authState')
    localStorage.removeItem('loggedVendor');
    localStorage.removeItem('id');
    this.router.navigate(["/"])
    this.authState = ''
  }

  ngOnInit() {
    this.authService.authState.subscribe((authState: string) => {
      this.authState = authState
    })
  }

}
