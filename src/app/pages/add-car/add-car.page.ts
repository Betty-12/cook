import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {


  producto: any;
  Compra = [];
  cantidad: number = 1;
  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private storage: Storage
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
}
