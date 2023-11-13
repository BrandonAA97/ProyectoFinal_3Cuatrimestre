import { Component, OnInit } from '@angular/core';
import { Videos } from '../../models/models';
import { videosService } from 'src/app/services/videos.service';


@Component({
  selector: 'app-voley',
  templateUrl: './voley.component.html',
  styleUrls: ['./voley.component.css'],

})
export class VoleyComponent implements OnInit {

// public arregloTarjetaVoley: Videos[]=[];
public video: Videos[]=[];
constructor(private service:videosService) {}

datoBuscado=""


ngOnInit(){
  this.obtenerLosVideos();
  //   this.arregloTarjetaVoley = [
  //     {
  //       id: 15,
  //       titulo: 'USA vs Argentina (Juegos Olímpicos 2021)',
  //       subtitulo: '0 - 3',
  //       image:'/assets/img-videos/USA vs Argentina (Juegos Olímpicos 2021).jpg',
  //       url: 'https://www.youtube.com/watch?v=aGuNrODMnCw&pp=ygUmYXJnZW50aW5hIHZzIGVzdGFkb3MgdW5pZG9zIHZvbGV5IGpqb28%3D',
  //     },
  //     {
  //       id: 16,
  //       titulo: 'Argentina vs Perú - Clasificatorio a los Juegos Panamericanos 2023',
  //       subtitulo: '3 - 0',
  //       image: 'https://elcomercio.pe/resizer/_zrJfGNdT3JwLhWVSryaoe5OKJY=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OWN4V2A36BHNFJR2DSPDEXIBHU.jpg',
  //       url: 'https://youtu.be/bODo8ey82YU',
  //     },
  //     {
  //       id: 17,
  //       titulo: 'Argentina vs Colombia - Clasificatorio a los Juegos Panamericanos 2023 ',
  //       subtitulo: '3 - 1',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwC8-AXtr07g_nQLfedxpetk0QIv82MVTKQ&usqp=CAU',
  //       url: 'https://youtu.be/Fs49FDcxhFE',
  //     },
  //     {
  //       id: 18,
  //       titulo: 'Argentina vs Camerún - Copa del Mundo Japón 2019 - FIVB Volleyball World Cup',
  //       subtitulo: '3 - 1',
  //       image: 'https://d3b5jqy5xuub7g.cloudfront.net/wp-content/uploads/2019/09/voley.jpg',
  //       url: 'https://youtu.be/vOoYqqQ3P1E',
  //     }
  // ]
}

private obtenerLosVideos(){
  this.service.obtenerLosVideos().subscribe(res =>{
    this.video = res;
    console.log(res);
    this.videosVoley()
  });
}
private videosVoley(){
  this.video = this.video.filter(video => video.categoria ===  'Voley')
}
getImageUrl(video: Videos): string {
  const imageUrl = `http://localhost:8080/imagenes/${video.image}`;
  return imageUrl;
}
}



