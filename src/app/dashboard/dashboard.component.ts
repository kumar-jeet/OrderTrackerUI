import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:DashboardService) { }
  order:any;
  orderEmpty:any=false;
  dataLoaded:any=false;

  ngOnInit(): void {
    this.service.getOrder().subscribe((data)=>{
     
        this.order=data;
        if(this.order.length>0){
          this.dataLoaded=true;
          this.orderEmpty=true;
        }else{
          this.dataLoaded=true;
          this.orderEmpty=false;
        }
        
    })
  }

}
