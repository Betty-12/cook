import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MisDatosService } from 'src/app/service/mis-datos.service'

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {

  responseData: any;
  userId: any;
  constructor(
    private menuCtrl: MenuController,
    private misDatosPost: MisDatosService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {
    this.storage.get('userId').then((resp) => {
      this.userId = resp.objectId;
      console.log("ID:", this.userId);
    })

  }
  addMisDatos = new FormGroup({
    calle: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    idcard: new FormControl('', [Validators.required]),
    banco: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.menuCtrl.close();
    this.addMisDatos.controls;
  }

  async onSubmit() {

    const misDatos = {
      calle: this.addMisDatos.value.calle,
      numero: this.addMisDatos.value.numero,
      municipio: this.addMisDatos.value.municipio,
      estado: this.addMisDatos.value.estado,
      pais: this.addMisDatos.value.pais,
      idcard: this.addMisDatos.value.idcard,
      banco: this.addMisDatos.value.banco,
      idUser: this.userId
    }
    this.misDatosPost.misDatosAdd(misDatos).subscribe(async (response) => {
      console.log("RESP:", response);
      this.responseData = response;
      if (this.responseData.objectId == undefined) {
        console.log("error");

      } else {
        const alert = await this.alertCtrl.create({
          header: 'Registro Exitoso',
          message: 'Tus Datos Fueron Agregados Correctamente',
          buttons: [
            {
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.back();
              }
            }
          ]
        });
        (await alert).present();

      }
    }).unsubscribe;

  }

}
