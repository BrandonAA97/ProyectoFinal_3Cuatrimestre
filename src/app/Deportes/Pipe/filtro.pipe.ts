import { Pipe, PipeTransform } from "@angular/core";
import { Videos } from '../../models/models';
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(videos: Videos[], titulo: string): Videos[] {
        console.log(videos)
        console.log(titulo)
        if (!videos || !titulo){
            return videos
        }
        return videos.filter(video =>
            video.titulo.toLowerCase().includes(titulo.toLowerCase())
        )
    }


}
    