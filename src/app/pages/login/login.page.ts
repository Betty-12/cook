import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Contenido: any;
  mail = [];
  pass = [];
  data = [];
  email:string;
  password:string;

  private EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private auth: AuthServiceService,
    private NavigatorCtrl: NavController
  ) {
    this.auth.authService().subscribe((response)=>{

      this.Contenido = response['results']; 
      
      for (let index = 0; index < this.Contenido.length; index++) {
        this.mail.push(
          this.Contenido[index].email,
        );

        this.pass.push(
          this.Contenido[index].password
        );
        // this.data.push({
        //   email: this.Contenido[index].email,
        //   password: this.Contenido[index].password
        // });
      }     
      // console.log(this.data);
      
      console.log(this.mail);
      console.log(this.pass);
      

    }).unsubscribe;
   }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  ngOnInit() {
    this.loginForm.controls;
  }

  onSubmit(){  
    const user = {
      username: this.email,
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
