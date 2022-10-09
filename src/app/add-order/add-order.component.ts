import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddOrderService } from './add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  uploadForm:any= FormGroup; 
  constructor(private formBuilder: FormBuilder,private service:AddOrderService,private router:Router) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      poNumber:[''],
      poName: [''],
      poType:[''],
      containerId:[''],
      expDelDate:[''],
      price:['']

    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('poNumber', this.uploadForm.get('poNumber').value);
    formData.append('poName', this.uploadForm.get('poName').value);
    formData.append('poType', this.uploadForm.get('poType').value);
    formData.append('containerId', this.uploadForm.get('containerId').value);
    formData.append('expectedDeliveryDate', this.uploadForm.get('expDelDate').value);
    formData.append('price', this.uploadForm.get('price').value);
    var object:any = {};
    formData.forEach(function(value:any, key:any){
        object[key] = value;
    });
    
    this.service.addOrder(object).subscribe((data)=>{
      
      if(data=="Order added successfully"){
        this.router.navigate(['/dashboard']);
      }
       
    })
  
  }


}
