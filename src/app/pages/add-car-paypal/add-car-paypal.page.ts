import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-add-car-paypal',
  templateUrl: './add-car-paypal.page.html',
  styleUrls: ['./add-car-paypal.page.scss'],
})
export class AddCarPaypalPage implements OnInit {
  envio: number = 12;
  compra: number;
  @Input("precio") precio;
  @Input("cantidad") cantidad;
  @Input("objId") objId;
  total: number;
  

  banco: any;
  numTarjeta: any;
  numeroTarjeta: any;
  direccion: any
  numDireccion: any;
  producto: any;
  objIdUser: any;

  constructor(
    private storage: Storage
  ) { 
    
  }

  ngOnInit() {
    this.compra = parseInt(this.precio);
    this.total = this.compra + this.envio;
    
    this.storage.get("direccion").then((resp) => {

      this.banco = resp.banco;
      this.numTarjeta = resp.idcard.substr(-4);
      this.numeroTarjeta = resp.idcard;
      this.direccion = resp.calle;
      this.numDireccion = resp.numero;
      this.objIdUser = resp.idUser;

    });
  }

  onClickPedido(){

    const datosPedido = {
      total: this.total,
      cantidad: this.cantidad,
      numTarjeta: this.numeroTarjeta,
      objIdUser: this.objIdUser,
      objId: this.objId
    }

    console.log(datosPedido);

    this.storage.set("datosPedido",datosPedido);

  }

}
