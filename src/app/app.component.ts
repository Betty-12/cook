import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
  ) {
    this.storage.create();
  }

  closeSession(){
    this.storage.remove('userId');
    this.navCtrl.navigateRoot('/login');
    this.menuCtrl.close();
  }
}
