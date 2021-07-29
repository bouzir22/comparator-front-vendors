import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  @Output()
  authState: EventEmitter<String> = new EventEmitter()

  emitAuthState() {
    this.authState.emit('true')
  }

  getAdminbyMail(email: string) {
    return this.http.get("http://localhost:8080/access/admin/login/" + email);
  }
  getVendorbyMail(email: string) {
    return this.http.get("http://localhost:8080/access/vendor/login/" + email);
  }

}
