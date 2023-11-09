import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/models';
import { AuthService } from 'src/app/services/Auth.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  login!: LoginUsuario;
  email = "";
  nombreUsuario = "";
  password = "";
  roles: string[] = [];
  errMsj = "no funca";

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    
  ) { }
  

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.login =  new LoginUsuario(this.password,this.nombreUsuario, this.email);
    this.authService.login(this.login).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        console.log(err.error.message);
      }
    );

}
}