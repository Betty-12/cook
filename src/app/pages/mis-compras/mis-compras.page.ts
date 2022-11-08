import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
})
export class MisComprasPage implements OnInit {

  misCompras = [];
  constructor(
    private menuCtrl: MenuController,
    private storage: Storage
  ) { 
    this.menuCtrl.close();
    this.storage.get('datosPedido').then((resp)=>{
      this.misCompras.push({
        nombre: resp.nombre,
        cantidad: resp.cantidad,
        total: resp.total
      })
    })
  }

  ngOnInit() {
  }

}
