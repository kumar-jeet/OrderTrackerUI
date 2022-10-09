import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailService } from './detail.service';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers:[DetailService]
})
export class DetailsModule { }
