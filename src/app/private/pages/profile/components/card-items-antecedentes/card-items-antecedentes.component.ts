import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-items-antecedentes',
  templateUrl: './card-items-antecedentes.component.html',
  styleUrls: ['./card-items-antecedentes.component.scss'],
})
export class CardItemsAntecedentesComponent  implements OnInit {
  @Input() antecedentes!:any;
  constructor() { }

  ngOnInit() {}

}
