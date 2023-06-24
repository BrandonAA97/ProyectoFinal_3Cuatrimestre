import { Component, OnInit, Input } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
  url:string;
}

@Component({
  selector: 'app-voley',
  templateUrl: './voley.component.html',
  styleUrls: ['./voley.component.css'],
  
})
export class VoleyComponent implements OnInit {

title:String="Hola";
subtitle:string="Soy Manuel y esta es la página de SF Sports Replay...";
image:string="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ELA53BYUYZFR7KACH772VIGFT4.jpg";

public arregloTarjetaVoley: Tarjeta[]=[];
 @Input() dataEntranteVoley: any;

constructor() {}
ngOnInit(): void {
  this.arregloTarjetaVoley = [
      {titulo: "Argentina vs Cuba",
       subtitulo: "3 - 0", 
       image: "https://www.ole.com.ar/2021/08/01/v-yeG4_99_1200x630__1.jpg", 
       url: "https://www.youtube.com/watch?v=obNy5Mi2JoA&pp=ygUFdm9sZXk%3D"
      },
      {titulo: "Japon vs Argentina", 
        subtitulo: "3 - 1", 
        image: "https://i.ytimg.com/vi/eVNF9vJnZF0/maxresdefault.jpg", 
        url:"https://www.youtube.com/watch?v=VZCYjClmIFE&t=2183s&pp=ygUFdm9sZXk%3D"
      },

        {titulo: "USA vs Argentina", 
        subtitulo: "0 - 3", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThin6XhJpg3ZKpsqa3wVibBbI4dRVO2oH1Dw&usqp=CAU", 
        url:"https://www.youtube.com/watch?v=Tc8FLI9HCs8&pp=ygUmYXJnZW50aW5hIHZzIGVzdGFkb3MgdW5pZG9zIHZvbGV5IGpqb28%3D"
      },
        
        {titulo: "Argentina vs Brasil", 
        subtitulo: "Partido1", 
        image: "https://pbs.twimg.com/media/E5-sfsJXIAAQpaj.jpg:large", 
        url:""
      },
        
        {titulo: "Partido2", 
        subtitulo: "", 
        image: "", 
        url:""
      },
        
        {titulo: "Partido3", 
        subtitulo: "", 
        image: "", 
        url:""
      }

     ]

   }
   
  }

