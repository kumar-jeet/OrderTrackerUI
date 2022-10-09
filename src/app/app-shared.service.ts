import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSharedService {

  @Output() status: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  updateLoginStatus() {
    if(localStorage.getItem('loggedIn')=='true'){
      this.status.emit('true');
    }else{
      this.status.emit('false');
    }
  }

  getEmittedValue() {
    return this.status;
  }
}
