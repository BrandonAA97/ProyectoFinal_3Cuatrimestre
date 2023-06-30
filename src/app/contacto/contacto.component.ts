import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string;
  correo: string;
  mensaje: string;
  constructor(){
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
  enviarMensaje() {
    // Aquí puedes implementar la lógica para enviar el mensaje
    console.log('Mensaje enviado:', this.nombre, this.correo, this.mensaje);
    // Limpia los campos del formulario después de enviar el mensaje
    
  }
}
