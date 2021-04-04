import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydashboardRoutingModule } from './mydashboard-routing.module';
import { MydashboardComponent } from './mydashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MydashboardComponent],
  imports: [
    CommonModule,
    MydashboardRoutingModule,
    // BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    ChartsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MydashboardModule { }
