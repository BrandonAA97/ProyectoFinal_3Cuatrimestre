import { Component, OnInit} from '@angular/core';
import { Videos } from '../../models/models';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit{

  public arregloTarjetaFutbol: Videos[]=[];
  constructor() {}
  datoBuscado=''

  ngOnInit() {
    this.arregloTarjetaFutbol = [
      { titulo: "Argentina vs Brasil (Copa América 2021)", 
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
      }
    ]
  }
}
