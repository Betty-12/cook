import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-add-car-paypal',
  templateUrl: './add-car-paypal.page.html',
  styleUrls: ['./add-car-paypal.page.scss'],
})
export class AddCarPaypalPage implements OnInit {
  propina: number = 0;
  envio: number = 12;
  compra: number;
  // propinaTotal: number;
  @Input("precio") precio;
  constructor(
    private storage: Storage
  ) { 
    
  }

  ngOnInit() {
    // this.total = (this.propina) + (this.envio) + (this.precio);
    this.compra = parseInt(this.precio);
    this.storage.get("direccion").then((resp) => {
      console.log(resp);
    });
  }

}
