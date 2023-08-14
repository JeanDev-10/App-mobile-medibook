import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-items-titulo',
  templateUrl: './card-items-titulos.component.html',
  styleUrls: ['./card-items-titulos.component.scss'],
})
export class CardItemsTitulosComponent  implements OnInit {
  @Input() titulos!:any;
  constructor() { }

  ngOnInit() {}

}
