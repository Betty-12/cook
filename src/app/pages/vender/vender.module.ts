import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenderPageRoutingModule } from './vender-routing.module';

import { VenderPage } from './vender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VenderPageRoutingModule
  ],
  declarations: [VenderPage]
})
export class VenderPageModule {}
