import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  private socket: any;
  messages: any[] = [];
  newMessage: string = '';
  user!:any;
  email!:string;
  nombre!:string
  photoURL!:string
  constructor(private authService:AuthService) {
    this.authService.userInformation().subscribe((data)=>{
      console.log(data)
      this.user=data;
      this.email=data.email;
      this.nombre=data.nombre
    })
    }
  ngOnInit() {
    this.socket = io('http://localhost:3000'); // Cambia la URL según tu configuración
    this.socket.on('message', (data: any) => {
      console.log(data)
      this.messages.push(data);
    });
  }

  sendMessage() {
    console.log("emitir evento de chat")
    if (this.newMessage.trim() !== '') {
      const messageData = {
        text: this.newMessage,
        senderName:this.user.nombre,
      };
      this.socket.emit('message',messageData );
      this.newMessage = '';
      console.log("peticion de envio de mensaje a bd")
    }
  }




}
