import { Component } from '@angular/core';

@Component({
  selector: 'app-crearCuenta',
  templateUrl: './crearCuenta.component.html',
  styleUrls: ['./crearCuenta.component.css']
})
export class crearCuentaComponent {
    nombre!: string;
    Apellido!: string;
    correo!: string;
crearCuenta() {
throw new Error('Method not implemented.');
}

}