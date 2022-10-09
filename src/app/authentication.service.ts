import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public isAuthenticated(): boolean {
    if(localStorage.getItem('loggedIn')=='true'){
      return true;
    }else{
      return false;
    }
   
  }
}
