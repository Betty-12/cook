import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ProductAddService } from 'src/app/service/product-add.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Contenido: any;
  constructor(
    private menuCtrl: MenuController,
    private productos: ProductAddService,
    private storage: Storage,
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {
    // const load = this.loadingCtrl.create({message:'Cargando'});
    // (await load).present();
    this.productos.getProducts().subscribe((response) => {
      console.log("DATA", response);
      
      this.Contenido = response['results'];
    }).unsubscribe;
    this.menuCtrl.close();

  }

  onClick(producto) {
    const idProduct = producto.objectId;
    this.storage.set('producto ' + idProduct, producto).then((resp) => {
      console.log("Producto::", resp);
      const queryParams = {
        objectId: resp.objectId,
        nombre: resp.nombre,
        precio: resp.precio,
      }
      this.router.navigate(['/add-car'], { queryParams })
    });



  }
}
