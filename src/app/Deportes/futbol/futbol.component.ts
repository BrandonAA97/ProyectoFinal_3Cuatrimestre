import { Component, OnInit} from '@angular/core';
import { Videos } from '../../models/models';
import { videosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit{

  //public arregloTarjetaFutbol: Videos[]=[];
  video: Videos[]=[];
  constructor(private service:videosService) {}
  datoBuscado=''
  
  ngOnInit() {
    this.obtenerLosVideos();
    //this.arregloTarjetaFutbol = [
      // {
      //   id: 1,
      //   titulo: 'Argentina vs Brasil (Copa América 2021)',
      //   subtitulo: '1 - 0',
      //   image:'/assets/img-videos/Argentina vs Brasil (Copa América 2021).jpeg',
      //   url: 'https://www.youtube.com/watch?v=U78tIU04xiM&t=1s&pp=ygUgYXJnZW50aW5hIC0gYnJhc2lsIGNvcGEgYW3DqXJpY2E%3D',
      // },
      // {
      //   id: 2,
      //   titulo: 'Argentina vs Italia (Finalissima 2022)',
      //   subtitulo: '3 - 0',
      //   image: '/assets/img-videos/Argentina vs Italia (Finalissima 2022).jpeg',
      //   url: 'https://youtu.be/dpSqkiJHpTg',
      // },
      // {
      //   id: 3,
      //   titulo: 'Argentina vs Francia (Mundial Qatar 2022 - Final)',
      //   subtitulo: '3(4) - 3(2)',
      //   image:'/assets/img-videos/Argentina vs Francia (Mundial Qatar 2022 - Final).jpeg',
      //   url: 'https://youtu.be/2OKjdR3vvQE',
      // },
      // {
      //   id: 4,
      //   titulo: 'Argentina vs Colombia - Semifinal Copa América 2021 - Partido Completo',
      //   subtitulo: '1(3) - 1(2)',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVf9uQ8lH-gBYCh2JhmSUU66vdkBVfQUh8rA&usqp=CAU',
      //   url: 'https://youtu.be/7QeRMF5cR1Y',
      // },
      // {
      //   id: 5,
      //   titulo: 'Argentina vs Uruguay - Eliminatorias Sudamericanas Qatar 2022 - Partido Completo',
      //   subtitulo: '3 - 0',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9AL7YotdN0Pus_JhAflKipT2jvdEn5zXEg&usqp=CAU',
      //   url: 'https://www.youtube.com/watch?v=SP4y-22R1B8&pp=ygUdcGFydGlkb3MgZW50ZXJvcyBkZSBhcmdlbnRpbmE%3D',
      // },
      // {
      //   id: 6,
      //   titulo: 'Argentina vs Colombia - Copa América 2015 - Partido completo',
      //   subtitulo: '0(5) - 0(4)',
      //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw-7lt3OX_MmeyZQzCsIWYNq7nRjduPZijg&usqp=CAU',
      //   url: 'https://youtu.be/XtRG2O4uVlA',
      // },
    //]
  }
  private obtenerLosVideos(){
    this.service.obtenerLosVideos().subscribe(res =>{
      this.video = res;
      console.log(res);
      this.videosFutbol()
    });
  }
  private videosFutbol(){
    this.video = this.video.filter(video => video.categoria ===  'Futbol')
  }
  
  
}
