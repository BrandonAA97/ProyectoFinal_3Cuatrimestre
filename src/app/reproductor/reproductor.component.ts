import { Component, OnInit } from '@angular/core';
import { videosService } from '../services/videos.service';
import { Videos } from '../models/models';
import { ActivatedRoute } from '@angular/router';
import videojs from 'video.js';



@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit{

  private player:any
  video!: Videos;
  id: number = 0;
  tituloConExtension: String = '';
  videoUrl: String = '';


  constructor(
    private service: videosService,
    private route: ActivatedRoute,

    ){}

  ngOnInit(){


    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.obtenerVideo(this.id);
    });



  }

    private obtenerVideo(id: number){
      this.id = id
      this.service.obtenerUrlVideo(this.id).subscribe(video => {
        this.video = video;
        const partes = this.video.url.split('/')
        this.tituloConExtension = partes[partes.length - 1];
        this.videoUrl = "http://localhost:8080/videos/" + this.tituloConExtension;
        console.log(this.videoUrl)
        this.player = videojs('my-video', {
          controls: true, // Muestra los controles del reproductor
      });
      this.cambiarVideo(this.videoUrl)
      });
    }
    cambiarVideo(nuevaURL: String) {
      // nuevaURL = this.videoUrl;
      this.player.pause(); // Pausar el video actual si se está reproduciendo
      this.player.src({ src: nuevaURL, type: 'video/mp4' }); // Cambiar la fuente del video
      this.player.load(); // Recargar el video con la nueva fuente
      this.player.play(); // Iniciar la reproducción del nuevo video
    }
    ngOnDestroy() {
      // Destruir el reproductor de video al salir del componente
      if (this.player) {
        this.player.dispose();
      }
    }
}


