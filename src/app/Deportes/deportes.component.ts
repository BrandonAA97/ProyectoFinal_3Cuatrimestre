import { Component, OnInit} from '@angular/core';
import { Videos } from '../models/models';
import { videosService } from '../services/videos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})

export class DeportesComponent implements OnInit  {

  video : Videos[] = [];
  
  constructor(private service:videosService, private router: Router){}

  datoBuscado='';
  videoSeleccionado?: Videos;
  videoUrl?: String;
  
  ngOnInit(){
    this.obtenerLosVideos();
  }

  private obtenerLosVideos(){
    this.service.obtenerLosVideos().subscribe(res =>{
      this.video = res;
      console.log(res);
    });
  }
   
}

