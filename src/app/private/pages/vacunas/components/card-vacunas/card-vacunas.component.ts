import { Component, OnInit } from '@angular/core';
import { VacunasService } from 'src/app/private/services/vacunas.service';
import { EventEmitterService } from '../../../dudas/services/event-emitter.service';

@Component({
  selector: 'app-card-vacunas',
  templateUrl: './card-vacunas.component.html',
  styleUrls: ['./card-vacunas.component.scss'],
})
export class CardVacunasComponent implements OnInit {
  constructor(
    private vacunasService: VacunasService,
    private eventEmitterService: EventEmitterService
  ) {
    this.eventEmitterService.getEvent().subscribe((event) => {
      if (event.event === 'LOAD_VACUNAS') {
        this.Obtener_Vacunas();
      }
    });
  }

  ngOnInit() {
    this.Obtener_Vacunas();
  }

  Todas_Vacunas: any;

  Obtener_Vacunas() {
    this.vacunasService.Todas_Vacunas().subscribe({
      next: (s: any) => {
        this.Todas_Vacunas = s.Informacion.vacuna;
        console.log(this.Todas_Vacunas);
      },
    });
  }
  handleRefresh(event: any) {
    this.vacunasService.Todas_Vacunas().subscribe({
      next: (s: any) => {
        this.Todas_Vacunas = s.Informacion.vacuna;
        console.log(this.Todas_Vacunas);
        event.target.complete();
      },
    });
  }
}
