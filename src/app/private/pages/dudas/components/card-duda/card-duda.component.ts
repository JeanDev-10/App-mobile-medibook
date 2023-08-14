import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-duda',
  templateUrl: './card-duda.component.html',
  styleUrls: ['./card-duda.component.scss'],
})
export class CardDudaComponent  implements OnInit {
  @Input() duda!:any
  constructor() { }

  ngOnInit() {}

}
