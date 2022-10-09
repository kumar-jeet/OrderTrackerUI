import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  constructor(private http:HttpClient) { }

  addOrder(order:any){
    return this.http.post(environment.baseUrl+'/order',order,{responseType: 'text'});
  }
}
