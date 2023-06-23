interface Videos{
  titulo: string,
  subtitulo: string,
  image: string,
  url: string,
}
import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'SF Replay';

}
