import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrderRoutingModule } from './add-order-routing.module';
import { AddOrderComponent } from './add-order.component';
import { HttpClientModule } from '@angular/common/http';
import { AddOrderService } from './add-order.service';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    AddOrderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers:[AddOrderService]
})
export class AddOrderModule { }
