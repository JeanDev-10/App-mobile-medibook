import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titulos=[{
    "nombre":"asdas"
  },
  {
    "nombre":"asdasd"
  }
]
  constructor(private authService: AuthService,private toastService: ToastService,private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout().subscribe(data=>{
      this.authService.deleteToken();
      this.router.navigate(['/login']);
      this.toastService.sucess('Has finalizado la sesión');
    });
  }
}
