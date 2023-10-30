import { Component } from '@angular/core';
import { videosService } from '../services/videos.service';
import { Videos } from '../models/models';
import { MediaService } from '../services/media.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subir-video',
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})
export class SubirVideoComponent {

 
constructor(
  private service: videosService, 
  private mediaService: MediaService, 
  private http: HttpClient,
  private fb: FormBuilder
  ){}

  video: Videos = new Videos(0, '', '', '', '', '') 

  subirVideo(event: any){
    const file = event.target.files[0]

    if(file){
      const fb = new FormData();
      fb.append('file', file);

      this.mediaService.subirFichero(fb)
      .subscribe(response =>{
        console.log('response', response)
      });
    }
  }
  subir(video:Videos){
    this.service.agregarVideo(video)
    .subscribe(data =>{
      alert("Video agregado!");
    })
  }
  }




