import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-citas',
  templateUrl: './card-citas.component.html',
  styleUrls: ['./card-citas.component.scss'],
})
export class CardCitasComponent  implements OnInit {
  @Input() cita!:any;
  constructor() { }

  ngOnInit() {}

}
