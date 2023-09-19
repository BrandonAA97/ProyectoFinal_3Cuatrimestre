import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Videos } from "../models/models";

@Injectable({
    providedIn:'root'
})
export class videosService {
    private baseURL = "http://localhost:8080/api/v1";

    constructor(private http: HttpClient){}

    obtenerLosVideos(): Observable<Videos[]>{
        return this.http.get<Videos[]>(`${this.baseURL}/all`);
    }
    agregarVideo(nuevoVideo : Videos ): Observable<object>{
        return this.http.post(`${this.baseURL}/add`, nuevoVideo);
    }
    modificarDatosVideo(titulo:string, Video:Videos ): Observable<object>{
        return this.http.put(`${this.baseURL}/${titulo}`, Video);
    }
    eliminarVideo(titulo:string) : Observable<object>{
        return this.http.delete(`${this.baseURL}/${titulo}`);
    }

    

}


