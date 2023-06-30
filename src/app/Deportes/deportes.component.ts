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
      titulo: 'Argentina vs Perú - Clasificatorio a los Juegos Panamericanos 2023',
      subtitulo: '3 - 0',
      image: 'https://elcomercio.pe/resizer/_zrJfGNdT3JwLhWVSryaoe5OKJY=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OWN4V2A36BHNFJR2DSPDEXIBHU.jpg',
      url: 'https://youtu.be/bODo8ey82YU',
    },
    {
      titulo: 'Argentina vs Colombia - Clasificatorio a los Juegos Panamericanos 2023 ',
      subtitulo: '3 - 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwC8-AXtr07g_nQLfedxpetk0QIv82MVTKQ&usqp=CAU',
      url: 'https://youtu.be/Fs49FDcxhFE',
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
      titulo: 'Argentina vs Colombia - Semifinal Copa América 2021 - Partido Completo',
      subtitulo: '1(3) - 1(2)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVf9uQ8lH-gBYCh2JhmSUU66vdkBVfQUh8rA&usqp=CAU',
      url: 'https://youtu.be/7QeRMF5cR1Y',
    },
    {
      titulo: 'Argentina vs Uruguay - Eliminatorias Sudamericanas Qatar 2022 - Partido Completo',
      subtitulo: '3 - 0',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9AL7YotdN0Pus_JhAflKipT2jvdEn5zXEg&usqp=CAU',
      url: 'https://www.youtube.com/watch?v=SP4y-22R1B8&pp=ygUdcGFydGlkb3MgZW50ZXJvcyBkZSBhcmdlbnRpbmE%3D',
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
    {
      titulo: 'Argentina vs España - Partido Completo - Mundial de Básquet China 2019 - Final - Campeón',
      subtitulo: '75 - 95',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVoS1Kjx6EuBP7jEXXP5cSXekK9WuQnRnjg&usqp=CAU',
      url: 'https://www.youtube.com/watch?v=_ZaKMFUh4lQ&pp=ygURYmFzcXVldCBhcmdlbnRpbmE%3D',
    },
    {
      titulo: 'Argentina v Korea - Full Basketball Game - FIBA U19 Basketball World Cup 2023',
      subtitulo: '88 - 76',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC3osRwS7r2gzhjW299_bL6kkDtsRB3UgC74LSFOftNoPT9BtcbUO8ukqh6NgvVZOzoM&usqp=CAU',
      url: 'https://www.youtube.com/watch?v=zE6yWucpPJk&pp=ygURYmFzcXVldCBhcmdlbnRpbmE%3D',
    },
  ]
}

}
