import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Videos } from "../models/models";

@Injectable({
    providedIn:'root'
})
export class service {
    private baseURL = "http:localhost:8080"
    
    constructor(private http: HttpClient){}

    obtenerlistaVideos(): Observable<Videos[]>{
        return this.http.get<Videos[]>(`${this.baseURL}`)
    }
    

}


