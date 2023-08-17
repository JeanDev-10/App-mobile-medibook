import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.page.html',
  styleUrls: ['./titulos.page.scss'],
})
export class TitulosPage implements OnInit {
  @Input() medico!:any;
  cita!:any;
  constructor() { }

  ngOnInit() {
  }

}
