import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSharedService } from 'src/app/app-shared.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

uploadForm:any= FormGroup; 

  constructor(private formBuilder: FormBuilder,private service:LoginService,private router:Router, private sharedService:AppSharedService) { }
  
  ngOnInit(): void {
    localStorage.setItem('loggedIn','false');
    this.uploadForm = this.formBuilder.group({
      username:[''],
      password: ['']

    });
 
  }
  loginCredsResp:Boolean=true;

  login(){
    var formData: any = new FormData();
    formData.append('username', this.uploadForm.get('username').value);
    formData.append('password', this.uploadForm.get('password').value);
    var object:any = {};
    formData.forEach(function(value:any, key:any){
      object[key] = value;
  });

    this.service.getLoginStatus(object).subscribe(result=>{
        localStorage.setItem('loggedIn',result.toString());
        this.sharedService.updateLoginStatus();
        this.router.navigate(['/dashboard']);
    },(err)=>{
      this.loginCredsResp=false;
      setTimeout(()=>{
        this.loginCredsResp=true;
      },2000)
      this.router.navigate(['']);
    })
  }

}
