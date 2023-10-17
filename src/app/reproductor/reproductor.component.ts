import { Component, OnInit } from '@angular/core';
import { videosService } from '../services/videos.service';
import { Videos } from '../models/models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit{
  
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
    });
    }
  
}
