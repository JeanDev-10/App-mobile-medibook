import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-observacion-crear',
  templateUrl: './observacion-crear.page.html',
  styleUrls: ['./observacion-crear.page.scss'],
})
export class ObservacionCrearPage implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor() { }

  ngOnInit() {
  }

}
