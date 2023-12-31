import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacreatePageRoutingModule } from './pharmacreate-routing.module';

import { PharmacreatePage } from './pharmacreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PharmacreatePageRoutingModule
  ],
  declarations: [PharmacreatePage]
})
export class PharmacreatePageModule {}
