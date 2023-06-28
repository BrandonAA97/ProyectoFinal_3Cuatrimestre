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
      {titulo: "Argentina vs Brasil (FIBA AmeriCup 2022 - Final)",
       subtitulo: "75 - 73",
       image: "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-09/-acc3405e-b59f-4918-ac5b-fff2fd6581ff.png?itok=cYStkAP0",
       url:"https://www.youtube.com/live/vIJtw5FJdyU?feature=share"
      },
      {titulo: "Argentina vs México (FIBA U18 Americas Championship 2022)",
       subtitulo: "75 - 57",
       image: "https://www.fiba.basketball/api/img/graphic/d94ae3bb-208b-4b85-ba78-627f5eac3604/1000/1000?mt=.jpg",
       url:"https://www.youtube.com/watch?v=v4-3rk1DhEY"
      },
      {titulo: "Argentina - USA (Juegos Olímpicos 2004)",
       subtitulo: "81 - 72",
       image: "https://img.olympicchannel.com/images/image/private/t_twitter_share_thumb/f_auto/primary/raglyinyxlghogihhuvf",
       url:"https://www.youtube.com/watch?v=K5PFNpiP5aY"
      },
      
    ]
  }
}
