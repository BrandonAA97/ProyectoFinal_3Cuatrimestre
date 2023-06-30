import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Videos } from '../../models/models';


@Component({
  selector: 'app-voley',
  templateUrl: './voley.component.html',
  styleUrls: ['./voley.component.css'],
  
})
export class VoleyComponent implements OnInit {

public arregloTarjetaVoley: Videos[]=[];

constructor() {}

datoBuscado=""


ngOnInit(): void {
    this.arregloTarjetaVoley = [
      {
        titulo: 'Argentina vs Cuba (Amistoso Internacional)',
        subtitulo: '3 - 0',
        image:'/assets/img-videos/Argentina-vs-Cuba-_Amistoso-Internacional_.jpg',
        url: 'https://www.youtube.com/watch?v=obNy5Mi2JoA&pp=ygUFdm9sZXk%3D',
      },
      {
        titulo: 'Japon vs Argentina (Liga de naciones de voley 2019)',
        subtitulo: '3 - 1',
        image:'/assets/img-videos/Japon vs Argentina (Liga de naciones de voley 2019).jpg',
        url: 'https://www.youtube.com/watch?v=VZCYjClmIFE&t=2183s&pp=ygUFdm9sZXk%3D',
      },
      {
        titulo: 'USA vs Argentina (Juegos Olímpicos 2021)',
        subtitulo: '0 - 3',
        image:'/assets/img-videos/USA vs Argentina (Juegos Olímpicos 2021).jpg',
        url: 'https://www.youtube.com/watch?v=aGuNrODMnCw&pp=ygUmYXJnZW50aW5hIHZzIGVzdGFkb3MgdW5pZG9zIHZvbGV5IGpqb28%3D',
      },
  ]
}
}



