import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-signo-vitales',
  templateUrl: './signo-vitales.component.html',
  styleUrls: ['./signo-vitales.component.scss'],
})
export class SignoVitalesComponent  implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/animacion_carga.json',
  };

  constructor() { }

  ngOnInit() {}

}
