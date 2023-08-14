import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-reply-duda',
  templateUrl: './card-reply-duda.component.html',
  styleUrls: ['./card-reply-duda.component.scss'],
})
export class CardReplyDudaComponent  implements OnInit {
@Input() duda!:any
  constructor() { }

  ngOnInit() {}

}
