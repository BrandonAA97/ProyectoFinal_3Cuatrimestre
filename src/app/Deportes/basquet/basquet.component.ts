import { Component, OnInit } from '@angular/core';
import { Videos } from '../../models/models';
import { videosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-basquet',
  templateUrl: './basquet.component.html',
  styleUrls: ['./basquet.component.css']
})
export class BasquetComponent implements OnInit{

  // public arregloTarjetaBasquet: Videos[]=[];
  public video:Videos[]=[];
  constructor(private service:videosService) {}
  datoBuscado=''

  ngOnInit() {
    this.obtenerLosVideos();
    // this.arregloTarjetaBasquet = [
    //   {
    //     id: 8,
    //     titulo: 'Argentina vs México (FIBA U18 Americas Championship 2022)',
    //     subtitulo: '75 - 57',
    //     image:'/assets/img-videos/Argentina vs México (FIBA U18 Americas Championship 2022).jpg',
    //     url: 'https://www.youtube.com/watch?v=v4-3rk1DhEY',
    //   },
    //   {
    //     id: 9,
    //     titulo: 'Argentina - USA (Juegos Olímpicos 2004)',
    //     subtitulo: '81 - 72',
    //     image:'/assets/img-videos/Argentina - USA (Juegos Olímpicos 2004).jpeg',
    //     url: 'https://www.youtube.com/watch?v=K5PFNpiP5aY',
    //   },
    //   {
    //     id: 10,
    //     titulo: 'Argentina vs España - Partido Completo - Mundial de Básquet China 2019 - Final - Campeón',
    //     subtitulo: '75 - 95',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVoS1Kjx6EuBP7jEXXP5cSXekK9WuQnRnjg&usqp=CAU',
    //     url: 'https://www.youtube.com/watch?v=_ZaKMFUh4lQ&pp=ygURYmFzcXVldCBhcmdlbnRpbmE%3D',
    //   },
    //   {
    //     id: 11,
    //     titulo: 'Argentina v Korea - Full Basketball Game - FIBA U19 Basketball World Cup 2023',
    //     subtitulo: '88 - 76',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC3osRwS7r2gzhjW299_bL6kkDtsRB3UgC74LSFOftNoPT9BtcbUO8ukqh6NgvVZOzoM&usqp=CAU',
    //     url: 'https://www.youtube.com/watch?v=zE6yWucpPJk&pp=ygURYmFzcXVldCBhcmdlbnRpbmE%3D',
    //   },
    //   {
    //     id: 12,
    //     titulo: 'Argentina vs. Ecuador - Full Basketball Game - FIBA U18 Americas Championship 2022',
    //     subtitulo: '92 - 47',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk8HpFVCqoc5ZBtK-ID6q_hyXFrsc1CNiFMrxmMfF5vkwv5PH7WUasKIcUijE4A7Ff-s&usqp=CAU',
    //     url: 'https://www.youtube.com/watch?v=Vi06ZxXhCaw&pp=ygURYmFzcXVldCBhcmdlbnRpbmE%3D',
    //   },

    // ]
  }
  private obtenerLosVideos(){
    this.service.obtenerLosVideos().subscribe(res =>{
      this.video = res;
      console.log(res);
      this.videosBasquet()
    });
  }
  private videosBasquet(){
    this.video = this.video.filter(video => video.categoria ===  'Basquet')
  }
  getImageUrl(video: Videos): string {
    const imageUrl = `http://localhost:8080/imagenes/${video.image}`;
    return imageUrl;
  }
}
