import { Component, Input, OnInit } from '@angular/core';
import { TituloService } from 'src/app/private/services/titulo.service';

@Component({
  selector: 'app-cards-titulos',
  templateUrl: './cards-titulos.component.html',
  styleUrls: ['./cards-titulos.component.scss'],
})
export class CardsTitulosComponent  implements OnInit {


  constructor(private tituloService:TituloService ) {
    this.getTitulo();
  }

  ngOnInit() {}
  title!:any;
  getTitulo(){
    this.tituloService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.title = data.titulos;
  })
  }
}
