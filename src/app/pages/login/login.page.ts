import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController, NavController, ToastController} from '@ionic/angular';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  private EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  constructor(
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private auth: AuthServiceService,
    private NavigatorCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    
   }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(this.EMAILPATTERN)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  ngOnInit() {
    this.menuCtrl.swipeGesture(false);
    this.loginForm.controls;
  }

  onSubmit(){  
    const user = {
      email: this.email,
      password: this.password
    }
    if(this.loginForm.value.email === undefined || this.loginForm.value.email === null){
      this.validateAlert('Error Datos', 'Ingrese un correo');
    } else if (this.loginForm.value.password === undefined || this.loginForm.value.password === null){
      this.validateAlert('Error Datos', 'Inglese una contraseña');
    } else {
      this.auth.authServiceGet(user).subscribe((response)=>{
        this.NavigatorCtrl.navigateRoot('/home');
      },
      err => {
        this.validateAlert('Datos Incorrectos', 'La contraseña o el correo no son correctos :(');
      });
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: '¡Bienvenido a Cook Home!',
      duration: 2500,
      position: position
    });

    await toast.present();
  }

  async validateAlert(title, message){
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    (await alert).present();
  }
  
}
