import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarPaypalPageRoutingModule } from './add-car-paypal-routing.module';

import { AddCarPaypalPage } from './add-car-paypal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarPaypalPageRoutingModule
  ],
  declarations: [AddCarPaypalPage]
})
export class AddCarPaypalPageModule {}
