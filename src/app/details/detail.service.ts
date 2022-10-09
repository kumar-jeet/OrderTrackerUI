import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }
  getOrderDetails(id:any){
    
    return this.http.get(environment.baseUrl+`/order/${id.id}`);
  }

  updateOrderStatus(orderId:any){
   const orderDetails={
      id:orderId
    }
    
    return this.http.put(environment.baseUrl+`/order`,orderDetails);
  }
}
