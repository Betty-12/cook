import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ProductAddService } from 'src/app/service/product-add.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  private addproduct: any;
  response: any;
  constructor(
    private productoPost: ProductAddService,
    private storage: Storage,
    private menuCtrl: MenuController
  ) { }

  addProducto = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    descripcion: new FormControl('',[Validators.required, Validators.minLength(8)]),
    cantidad: new FormControl('',[Validators.required, Validators.minLength(1)]),
    precio: new FormControl('',[Validators.required, Validators.minLength(1)]),
    otro: new FormControl('',),
    image: new FormControl('',[Validators.required,]),
  });
  ngOnInit() {
    this.menuCtrl.close();
    this.addProducto.controls;
  }

  onSubmit(){
    console.log("DATA::", this.addProducto.value);
    const producto = {
      nombre: this.addProducto.value.nombre,
      descripcion: this.addProducto.value.descripcion,
      cantidad: this.addProducto.value.cantidad,
      precio: this.addProducto.value.precio,
      otro: this.addProducto.value.otro,
      image1: this.addProducto.value.image
    }
    this.productoPost.productAdd(producto).subscribe( (response)=>{
      this.response = response;

    }).unsubscribe;
  }

}
