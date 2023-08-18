import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-card-citas',
  templateUrl: './card-citas.component.html',
  styleUrls: ['./card-citas.component.scss'],
})
export class CardCitasComponent  implements OnInit {
  @Input() cita!:any;
  user:any
  constructor(private authService:AuthService)
  {
    this.authService.userInformation().subscribe((data)=>{
      this.user=data
    })
   }

  ngOnInit() {}

}
