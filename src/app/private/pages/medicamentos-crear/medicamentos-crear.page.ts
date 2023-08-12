import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-medicamentos-crear',
  templateUrl: './medicamentos-crear.page.html',
  styleUrls: ['./medicamentos-crear.page.scss'],
})
export class MedicamentosCrearPage implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor() { }

  ngOnInit() {
  }

}
