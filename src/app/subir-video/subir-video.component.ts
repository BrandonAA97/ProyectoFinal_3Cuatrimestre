import { Component, OnInit } from '@angular/core';
import { videosService } from '../services/videos.service';
import { Videos } from '../models/models';
import { MediaService } from '../services/media.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subir-video',
  templateUrl: './subir-video.component.html',
  styleUrls: ['./subir-video.component.css']
})


export class SubirVideoComponent implements OnInit {
  videoUrl?: any;
  videoImg?: any;
  isLogger=false;
  username="";
  
constructor(
  private service: videosService,
  private mediaService: MediaService,
  private tokenService: TokenService,
  private router: Router
  ){}
  ngOnInit() {
    
    if(this.tokenService.getToken()){
      this.isLogger=true;
      this.username = this.tokenService.getUserName();
    } else{
      this.isLogger = false;
      this.username = "";
      this.router.navigate(['/login']); 
    }
  }


  video: Videos = new Videos(0, '', '', '', '', '');

   capturarArchivo(event: any){
    const file = event.target.files[0]


    if(file){
      if(file.type === 'video/mp4'){
        this.videoUrl = file;
        this.procesarVideo(this.videoUrl);
        console.log(this.videoUrl)
      }else if(file.type === 'image/jpeg'){
        this.videoImg = file;
        this.procesarImage(this.videoImg);
        console.log(this.videoImg)
       }
    }
   }
   procesarVideo(file: File | undefined) {
    if(file !== undefined){

       const fileName = file.name;

       const fileNameString = String(fileName);

       this.video.url = fileNameString;
       console.log(this.video.url)
    }
    }

    procesarImage(file: File | undefined) {

      if(file !== undefined){
        const fileName = file.name;

        const fileNameString = String(fileName);

        this.video.image = fileNameString;
        console.log(this.video.image)
      }

     }


  subir(video:Videos){
    if(this.video.titulo && this.video.url && this.video.image && this.video.categoria && this.video.subtitulo ){
      //crea el formdata para almacenar el file con el video que trae this.video.url y lo guarda en "fbVideo"
    const fbVideo = new FormData();
    fbVideo.append('file', this.videoUrl);
    //una vez almacenado lo envia al destino con "subirFichero"
       this.mediaService.subirFichero(fbVideo)
       .subscribe(response =>{
         console.log('video subido', response);


         console.log("video.url: " + this.videoUrl)
        });

    //crea el formdata para almacenar el file con la imagen que trae this.video.image y lo guarda en "fbImage"
    const fbImagen = new FormData();
    fbImagen.append('file', this.videoImg);
    //una vez almacenado lo envia al destino con "subirFichero"
       this.mediaService.subirFichero(fbImagen)
       .subscribe(response => {
         console.log('Imagen subida', response);


         console.log("video.image: " + this.videoImg)
        });

      this.service.agregarVideo(video).subscribe(data =>{
      alert("Video Subido!");
      console.log("Video final:" + video.url, " Imagen final:" + video.image)
    });
    }else{
    alert("completa todo los campos")
    }
  }
}




