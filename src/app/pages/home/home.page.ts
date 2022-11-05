import { Component } from '@angular/core';
import { ProductAddService } from 'src/app/service/product-add.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  Contenido: any;

  ProductoAdd: any;
  constructor(
    private productos: ProductAddService,
    private storage: Storage,
    private navCtrl: NavController,
    private router: Router,
  ) {
    this.productos.getProducts().subscribe((response) => {
      this.Contenido = response['results'];
    }).unsubscribe;
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
      this.router.navigate(['/add-car'], {queryParams})
    });

  }



}
