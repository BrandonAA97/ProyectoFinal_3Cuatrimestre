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
    {titulo: "Argentina vs Cuba (Amistoso Internacional)",
     subtitulo: "3 - 0", 
     image: "https://media.tycsports.com/files/2023/06/02/576561/argentina-vs-cuba-voley-2023-foto-feva_1440x810_wmk.webp?v=2", 
     url: "https://www.youtube.com/watch?v=obNy5Mi2JoA&pp=ygUFdm9sZXk%3D"
    },
    {titulo: "Japon vs Argentina (Liga de naciones de voley 2019)", 
      subtitulo: "3 - 1", 
      image: "https://www.somosvoley.com/notas/wp-content/uploads/2019/06/VNL-Japon-Argentina.jpg", 
      url:"https://www.youtube.com/watch?v=VZCYjClmIFE&t=2183s&pp=ygUFdm9sZXk%3D"
    },
    {titulo: "USA vs Argentina (Juegos Olímpicos 2021)", 
      subtitulo: "0 - 3", 
      image: "https://elobjetivo.com.ar/download/multimedia.normal.bc3a01d0ceea72a6.766f6c65795f6e6f726d616c2e77656270.webp", 
      url:"https://www.youtube.com/watch?v=aGuNrODMnCw&pp=ygUmYXJnZW50aW5hIHZzIGVzdGFkb3MgdW5pZG9zIHZvbGV5IGpqb28%3D"
    },
    { 
      titulo: "Argentina vs Brasil (Copa América 2021)", 
      subtitulo: "1 - 0", 
      image: "https://pbs.twimg.com/media/E5-sfsJXIAAQpaj.jpg:large", 
      url:"https://www.youtube.com/watch?v=U78tIU04xiM&t=1s&pp=ygUgYXJnZW50aW5hIC0gYnJhc2lsIGNvcGEgYW3DqXJpY2E%3D"
    },
      {titulo: "Argentina vs Italia (Finalissima 2022)",
       subtitulo: "3 - 0",
       image: "",
       url:"https://youtu.be/dpSqkiJHpTg"
    },
      {titulo: "Argentina vs Francia (Mundial Qatar 2022 - Final)",
       subtitulo: "3(4) - 3(2)",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpw1gUuLIpTGRojwP0e_G5cPQ2wiX_muFag&usqp=CAU",
       url:"https://youtu.be/2OKjdR3vvQE"
      },
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
