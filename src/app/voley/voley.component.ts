import { Component, OnInit, Input } from '@angular/core';
import { Videos } from '../models/models';

@Component({
  selector: 'app-voley',
  templateUrl: './voley.component.html',
  styleUrls: ['./voley.component.css'],
  
})
export class VoleyComponent implements OnInit {

public arregloTarjetaVoley: Videos[]=[];

constructor() {}
ngOnInit(): void {
  this.arregloTarjetaVoley = [
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
      }
     ]

   }
   
  }

