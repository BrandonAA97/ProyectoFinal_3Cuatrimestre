import { Component, OnInit } from '@angular/core';
import { Videos } from '../../models/models';

@Component({
  selector: 'app-basquet',
  templateUrl: './basquet.component.html',
  styleUrls: ['./basquet.component.css']
})
export class BasquetComponent implements OnInit{

  public arregloTarjetaBasquet: Videos[]=[];
  constructor() {}
  datoBuscado=''
 
  ngOnInit() {
    this.arregloTarjetaBasquet = [
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
