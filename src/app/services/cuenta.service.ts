import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cuenta } from "../models/models";

@Injectable({
    providedIn:'root'
})
export class cuentaService{
    // private baseURL = "http://localhost:8080/api/v1";

    // constructor(private http: HttpClient){}
    
    // obtenerLosVideo(): Observable<Cuenta[]>{
    //     return this.http.get<Cuenta[]>(`${this.baseURL}`);
    // }
    // nuevoUsuario(usuario : Cuenta ): Observable<object>{
    //     return this.http.post(`${this.baseURL}`, usuario);
    // }
    // modificarDatosVideo(nombre:string, modDatos:Cuenta ): Observable<object>{
    //     return this.http.put(`${this.baseURL}/${nombre}`, modDatos);
    // }
    // eliminarVideo(titulo:string) : Observable<object>{
    //     return this.http.delete(`${this.baseURL}/${titulo}`);
    // }
}
