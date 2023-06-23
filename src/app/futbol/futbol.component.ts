import { Component, Input, OnInit} from '@angular/core';

interface futbol {
  titulo:String;
  subtitulo:String;
  image:String;
  url:String;
}

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent {

  public arregloTarjetaFutbol: futbol[]=[];

  @Input() dataEntranteFutbol:any;
  
  ngOnInit() {
    this.arregloTarjetaFutbol = [
      {titulo: "", subtitulo: "", image: "", url:""},
      {titulo: "", subtitulo: "", image: "", url:""},
      {titulo: "", subtitulo: "", image: "", url:""}
    ]
  }
}
