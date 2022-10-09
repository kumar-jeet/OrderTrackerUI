import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSharedService } from './app-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test-ngProject';
  loggedIn:any;
  constructor(private router:Router, private sharedService:AppSharedService){}
  ngOnInit(): void {
    localStorage.setItem('loggedIn','false');
    this.sharedService.getEmittedValue()
      .subscribe(data => this.loggedIn=data);
  }
  
  logout(){
    
    localStorage.setItem('loggedIn','false');
    this.loggedIn="false";
    this.router.navigate(['/login']);
  }
}
