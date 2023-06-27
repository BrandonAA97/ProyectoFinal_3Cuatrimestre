import {Pipe, PipeTransform} from '@angular/core'
import { VoleyComponent } from '../Deportes/voley/voley.component'
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: , ...args?: any[] string[]): {
        
    }
}