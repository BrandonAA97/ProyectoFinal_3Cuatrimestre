import { Component, Input } from '@angular/core';

interface basquet {
  titulo:String;
  subtitulo:String;
  image:String;
  url:String;
}
@Component({
  selector: 'app-basquet',
  templateUrl: './basquet.component.html',
  styleUrls: ['./basquet.component.css']
})
export class BasquetComponent {

  public arregloTarjetaBasquet: basquet[]=[];

  @Input() dataEntranteBasquet:any;

  
  ngOnInit() {
    this.arregloTarjetaBasquet = [
      {titulo: "", subtitulo: "", image: "", url:""},
      {titulo: "", subtitulo: "", image: "", url:""},
      {titulo: "", subtitulo: "", image: "", url:""}
    ]
  }
}
