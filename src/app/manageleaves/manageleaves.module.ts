import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageleavesRoutingModule } from './manageleaves-routing.module';
import { ManageleavesComponent } from './manageleaves.component';


@NgModule({
  declarations: [ManageleavesComponent],
  imports: [
    CommonModule,
    ManageleavesRoutingModule
  ]
})
export class ManageleavesModule { }
