import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, CardsModule,
          IconsModule, DropdownModule, CarouselModule } from 'angular-bootstrap-md';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ManagestaffsRoutingModule } from './managestaffs-routing.module';
import { ManagestaffsComponent } from './managestaffs.component';


@NgModule({
  declarations: [ManagestaffsComponent],
  imports: [
    CommonModule,
    ManagestaffsRoutingModule,
    ModalModule.forRoot(),
    WavesModule,
    InputsModule,
    ButtonsModule.forRoot(),
    CardsModule.forRoot(),
    NgbModalModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule.forRoot(),
    NgbModule,
    CarouselModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagestaffsModule { }
