import { Component, OnInit} from '@angular/core';
import { Videos } from '../models/models';
import { videosService } from '../services/videos.service';



@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})

export class DeportesComponent implements OnInit  {

  video : Videos[] = [];
  
  constructor(private service:videosService){}

  datoBuscado=''

  ngOnInit(){
    this.obtenerLosVideos();
  }

  private obtenerLosVideos(){
    this.service.obtenerLosVideos().subscribe(res =>{
      this.video = res;
      console.log(res);
    });
  }
  public guardarUrl(){

  }
}

