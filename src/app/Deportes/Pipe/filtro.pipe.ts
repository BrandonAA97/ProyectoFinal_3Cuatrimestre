import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(value: any, ...arg: any): any {
        const resultadoVideos =[]
        for (const video of value){
            if (video.titulo.toLocaleLowerCase().indexOf(arg) > -1){
                resultadoVideos.push(video)
            }
        }
        return resultadoVideos
    }


}
    