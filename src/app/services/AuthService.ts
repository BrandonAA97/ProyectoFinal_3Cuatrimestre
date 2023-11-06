import { HttpClient } from "@angular/common/http";
import { nuevoUsuario, Login, jwtDto } from "../models/models";
import { Observable } from "rxjs";

export class AuthService{
    private baseURL = "http://localhost:8080/auth/";

    constructor(private httpClient: HttpClient){}
    public newUs(nuevoUsuario: nuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.baseURL + "newUs", nuevoUsuario);
    }
    public login(login: Login): Observable<jwtDto>{
        return this.httpClient.post<any>(this.baseURL + "login", login);
    }
}