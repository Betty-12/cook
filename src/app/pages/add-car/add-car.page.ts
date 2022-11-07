import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AddCarPaypalPage } from '../add-car-paypal/add-car-paypal.page';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  // cantidadProducto: string = '1';
  producto: any;
  Compra = [];
  cantidad: number = 1;
  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private storage: Storage,
    private modalCtrl: ModalController
  ) { 
    this.route.queryParams.subscribe(params => {
      if(params){
        this.producto = params.objectId;
        this.storage.get('producto '+this.producto).then( (response) => {
          console.log("responseST", response);
          this.Compra.push({
            nombre: response.nombre,
            disponibles: response.cantidad,
            precio: response.precio,
            descripcion: response.descripcion,
            image: response.image1.url,
            objectId: response.objectId
          });
        }).catch(()=>{
          console.log("No hay producto disponible");
          
        })
        console.log("TT", this.Compra);
        
      }
    })
  }

  ngOnInit() {
    this.menuCtrl.close();
  }

  onClickMenos(){

  }
  onClickMas(){

  }

  async a(compra){
    const compras = compra;
    console.log(compras);
    
    const modal = await this.modalCtrl.create({
      component: AddCarPaypalPage,
      componentProps: {
        descripcion: compras.descripcion,
        cantidad: this.cantidad,
        precio: compras.precio,
        objId: compra.objectId
      }
    });
   (await modal).present(); 
  }
}
