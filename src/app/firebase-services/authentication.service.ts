// declare var google: any;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  isLoggedIn = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
