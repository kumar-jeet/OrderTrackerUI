import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
orderDetails:any=[];
  constructor(private route:ActivatedRoute,private service:DetailService) { }

  ngOnInit(): void {
    
    this.service.getOrderDetails(this.route.snapshot.params).subscribe(data=>{
      
  this.orderDetails=data;
    })

  }

  updateStatus(id:any){
      this.service.updateOrderStatus(id).subscribe(data=>{
        this.ngOnInit();
      }

      )
  }
}
