import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarPaypalPage } from './add-car-paypal.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarPaypalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarPaypalPageRoutingModule {}
