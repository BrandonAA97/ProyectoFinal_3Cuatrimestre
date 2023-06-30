import { Component, OnInit} from '@angular/core';
import { Videos } from '../models/models';



@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})

export class DeportesComponent implements OnInit  {
public arregloDeportes: Videos[]=[]
datoBuscado=''

ngOnInit():void{
  this.arregloDeportes = [
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
    {
      titulo: 'Argentina vs Brasil (Copa América 2021)',
      subtitulo: '1 - 0',
      image:'/assets/img-videos/Argentina vs Brasil (Copa América 2021).jpeg',
      url: 'https://www.youtube.com/watch?v=U78tIU04xiM&t=1s&pp=ygUgYXJnZW50aW5hIC0gYnJhc2lsIGNvcGEgYW3DqXJpY2E%3D',
    },
    {
      titulo: 'Argentina vs Italia (Finalissima 2022)',
      subtitulo: '3 - 0',
      image: '/assets/img-videos/Argentina vs Italia (Finalissima 2022).jpeg',
      url: 'https://youtu.be/dpSqkiJHpTg',
    },
    {
      titulo: 'Argentina vs Francia (Mundial Qatar 2022 - Final)',
      subtitulo: '3(4) - 3(2)',
      image:'/assets/img-videos/Argentina vs Francia (Mundial Qatar 2022 - Final).jpeg',
      url: 'https://youtu.be/2OKjdR3vvQE',
    },
    {
      titulo: 'Argentina vs Brasil (FIBA AmeriCup 2022 - Final)',
      subtitulo: '75 - 73',
      image:'/assets/img-videos/Argentina vs Brasil (FIBA AmeriCup 2022 - Final).png',
      url: 'https://www.youtube.com/live/vIJtw5FJdyU?feature=share',
    },
    {
      titulo: 'Argentina vs México (FIBA U18 Americas Championship 2022)',
      subtitulo: '75 - 57',
      image:'/assets/img-videos/Argentina vs México (FIBA U18 Americas Championship 2022).jpg',
      url: 'https://www.youtube.com/watch?v=v4-3rk1DhEY',
    },
    {
      titulo: 'Argentina - USA (Juegos Olímpicos 2004)',
      subtitulo: '81 - 72',
      image:'/assets/img-videos/Argentina - USA (Juegos Olímpicos 2004).jpeg',
      url: 'https://www.youtube.com/watch?v=K5PFNpiP5aY',
    },
  ]
}

}
