import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
})
export class MisComprasPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { 
    this.menuCtrl.close();
  }

  ngOnInit() {
  }

}
