import { Component } from '@angular/core';
import { videosService } from '../services/videos.service';
import { Videos } from '../models/models';

@Component({
  selector: 'app-subir-video',
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})
export class SubirVideoComponent {


constructor(private service: videosService){}

video: Videos = new Videos(0, '', '', '', '', '');

subir() {
   this.service.agregarVideo(this.video)
    .subscribe(data=>{
      alert("se subio el video");
    })
    

}
}
