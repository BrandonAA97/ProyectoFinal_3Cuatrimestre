import { Component } from "@angular/core";
import { TokenService } from "../services/token.service";
import { AuthService }  from "../services/AuthService";

@Component({
    selector: 'cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.css']
  })

export class cuentaComponent{

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
    ){}
}