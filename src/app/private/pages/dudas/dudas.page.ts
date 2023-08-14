import { Component, OnInit } from '@angular/core';
import { DudasService } from '../../services/dudas.service';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.page.html',
  styleUrls: ['./dudas.page.scss'],
})
export class DudasPage implements OnInit {
  dudas:any;
  constructor(private dudaService:DudasService) {
    this.dudaService.getDudas().subscribe((data:any)=>{
      console.log(data)
      this.dudas=data.dudas
    })
   }

  ngOnInit() {
  }

}
