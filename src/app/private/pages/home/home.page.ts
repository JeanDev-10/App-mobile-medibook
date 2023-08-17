import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user:any
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.userInformation().subscribe((data)=>{
      this.user=data;
    })
  }

}
