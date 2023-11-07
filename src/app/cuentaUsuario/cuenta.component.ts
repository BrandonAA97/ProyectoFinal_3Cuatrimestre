import { Component, OnInit } from "@angular/core";
import { TokenService } from "../services/token.service";
import { AuthService }  from "../services/Auth.service";
import { Login, nuevoUsuario } from "../models/models";
import { Router } from "@angular/router";

@Component({
    selector: 'cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.css']
  })

export class cuentaComponent{

  isLogged = false;
  isLoginFail = false;
  nuevoUsuario: Login;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.nuevoUsuario =  new Login(this., this.password);
    this.authService.login(this.nuevoUsuario).subscribe(
      
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }
}