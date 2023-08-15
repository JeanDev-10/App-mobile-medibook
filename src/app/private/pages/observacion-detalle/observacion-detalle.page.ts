import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { ObservacionService } from '../../services/observacion.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-observacion-detalle',
  templateUrl: './observacion-detalle.page.html',
  styleUrls: ['./observacion-detalle.page.scss'],
})
export class ObservacionDetallePage implements OnInit {
  observacion!:any;
  user!:any;
  constructor(private notificacion:ToastService,private observacionService:ObservacionService,private authService:AuthService) {
    this.getObservacion();
  }

  ngOnInit() {
  }
  getObservacion(){
    this.observacionService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.observacion = data.CitaObservacion;
  })
}

}
