import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario, jwtDto } from 'src/app/models/models';
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
  username = "";
  password = "";
  roles: string[] = [];
  errMsj = "no funca";

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    
  ) {}
  

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.login = new LoginUsuario(this.password, this.username);
    this.authService.login(this.login).subscribe({
      next: (data: jwtDto) => {
        this.isLogged = true;
        this.isLoginFail = false;
  
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.log(this.errMsj = "no funca");
      }
    });
  }

}