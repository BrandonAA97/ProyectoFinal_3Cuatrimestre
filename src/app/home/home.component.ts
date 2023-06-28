import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagenes= [
    {
      src: '../assets/img/remate.gif',
      alt:'remate'
    },
    {
      src: '../assets/img/clavada.gif',
      alt:''
    },
    {
      src: '../assets/img/golArg.gif',
      alt:''
    }
  ]
  ngOnInit(): void {
      setInterval(()=> {
        this.changeImage();
      }, 5000)
      
        
  }
  currentImageIndex = 0;
  currentImage = this.imagenes[this.currentImageIndex];

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagenes.length;
    this.currentImage = this.imagenes[this.currentImageIndex];
  }

}
