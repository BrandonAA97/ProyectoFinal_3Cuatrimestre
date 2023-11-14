import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDto, nuevoUsuario } from 'src/app/models/models';
import { AuthService } from 'src/app/services/Auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class registroComponent {
  nuevoUsuario!: nuevoUsuario;
  nombre: string = "";
  username: string="";
  email: string= "";
  password: string= "";
  errMsj: string= "";
  isLogged = false;
  isRegister = false;
  isRegisterFail = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ){}
  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new nuevoUsuario(this.nombre, this.username, this.password,this.email);
    this.authService.newUs(this.nuevoUsuario).subscribe({
      next: (data: jwtDto) => {
        this.isRegister = true;
        this.isRegisterFail = false;
        this.router.navigate(["/login"]);
    }, error: (err) => {
      this.isRegister= false;
      this.isRegisterFail= true;
      this.errMsj = "no capo, corregi y volve";
    }
    });
  }
}