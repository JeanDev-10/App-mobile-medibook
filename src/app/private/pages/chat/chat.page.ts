import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  messages = [
    { text: 'Hola', sender: 'user' },
    { text: 'Hola, ¿cómo estás?', sender: 'receiver' },
    // Agrega más mensajes aquí
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Agrega la lógica para enviar mensajes y actualizar el arreglo `messages`
      this.newMessage = ''; // Limpia el campo de entrada después de enviar el mensaje
    }
  }

}
