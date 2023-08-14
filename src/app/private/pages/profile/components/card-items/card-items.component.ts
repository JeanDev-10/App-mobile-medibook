import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent  implements OnInit {
  @Input() Nombre!:any
  @Input() Number!:any
  constructor() { }

  ngOnInit() {}

}
