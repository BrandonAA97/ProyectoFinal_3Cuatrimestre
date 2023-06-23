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
      {titulo: "Argentina vs Cuba", subtitulo: "3 - 0", image: "https://www.ole.com.ar/2021/08/01/v-yeG4_99_1200x630__1.jpg", url: "https://www.youtube.com/watch?v=obNy5Mi2JoA&pp=ygUFdm9sZXk%3D"}
     ]

   }
   
  }

