import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { ObservacionService } from '../../services/observacion.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-observacion-detalle',
  templateUrl: './observacion-detalle.page.html',
  styleUrls: ['./observacion-detalle.page.scss'],
})
export class ObservacionDetallePage implements OnInit {
  observacion!:any;
  user!:any;
  id!:any;
  constructor(private notificacion:ToastService,private observacionService:ObservacionService,private authService:AuthService,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.getObservacion();
    });


  }

  ngOnInit() {
  }
  getObservacion(){
    this.observacionService.obtenerUno(this.id).subscribe((data) => {
      console.log(data);
      this.observacion = data.Observacion;
  })
}

}
