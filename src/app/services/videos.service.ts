import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Videos } from "../models/models";

@Injectable({
    providedIn:'root'
})
export class videosService {
    private baseURL = "http://localhost:8080/api/v1";
    //private baseVideoURL = "http://localhost:8080";

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

     urlVideo(url:string) : Observable <String>{
        return this.http.get<String>(`${this.baseURL}/${url}`);
    }
    obtenerUrlVideo(id: number): Observable<Videos> {
        return this.http.get<Videos>(`${this.baseURL}/find/videos/${id}`);
    }
    cargarVideo(formData: FormData): Observable<any>{
        return this.http.post(`${this.baseURL}/subir`, formData)
    }
        
    
}


