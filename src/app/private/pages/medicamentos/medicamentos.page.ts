import { MedicamentosService } from './../../services/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  idMedicamento!:number;


  constructor(private medicamentosService:MedicamentosService, private loadingCtrl:LoadingController) { 

  }

  ngOnInit() {
    this.Obtener_Todos_Medicamentos();
  }

  Index_medicamentos:any;


  Obtener_Todos_Medicamentos(){
    this.medicamentosService.Traer_Todos_Los_Medicamentos().subscribe({
      next: (s:any) =>{
        this.Index_medicamentos = s.Informacion.medicamento;
        console.log(this.Index_medicamentos);
      }
    })
  }
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
    });

    loading.present();
  }

}
