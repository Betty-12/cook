import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then( m => m.AddCarPageModule)
  },
  {
    path: 'vender',
    loadChildren: () => import('./pages/vender/vender.module').then( m => m.VenderPageModule)
  },
  {
    path: 'add-car-paypal',
    loadChildren: () => import('./pages/add-car-paypal/add-car-paypal.module').then( m => m.AddCarPaypalPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'mis-compras',
    loadChildren: () => import('./pages/mis-compras/mis-compras.module').then( m => m.MisComprasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
