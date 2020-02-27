import {Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name:'helo'
})

export class MobilePipe implements PipeTransform {
    transform(v:number){
        return v * v *v
    }
}