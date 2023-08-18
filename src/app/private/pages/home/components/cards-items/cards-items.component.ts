import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-items',
  templateUrl: './cards-items.component.html',
  styleUrls: ['./cards-items.component.scss'],
})
export class CardsItemsComponent  implements OnInit {
  @Input() icon!:any
  @Input() title!:any
  @Input() href!:any
  @Input() content!:any
  @Input() fondo!:any
  constructor() { }

  ngOnInit() {}

}
