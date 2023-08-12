import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController:ToastController){}
  async sucess(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',color:'success',
      icon:'checkmark-outline',
      translucent:true
    });

    await toast.present();
  }
  async error(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',color:'danger',
      icon:'close-outline',
      translucent:true,
    });

    await toast.present();
  }
}
