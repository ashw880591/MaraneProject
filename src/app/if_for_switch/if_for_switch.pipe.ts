import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'square'
})
//--------square-----------
export class IfPipe implements PipeTransform {
    transform(value:number){
        return value*value
        
    }

}
//--------Cube-------------------------------
@Pipe({
    name:'cube'
})
export class IfCube implements PipeTransform{
    transform(value:number){
        return value*value*value
    }
}
//----------Addition of two number----------
@Pipe({
    name:'addition'
})
export class IfAddition implements PipeTransform{
    transform(value:number){
        return value+value
    }
}
//----------Subtraction-----------
@Pipe({
    name:'subtraction'
})
export class IfSubtraction implements PipeTransform{
    transform(value:number){
        return value-value
    }
}
///-----------Multiplication--------
@Pipe({
    name:'multiplication'
})
export class IfMultiplication implements PipeTransform{
    transform(value:number){
        return value*value
    }
}
//------------Division-----------
@Pipe({
    name:'division'
})
export class IfDivision implements PipeTransform{
    transform(value:number){
        return value/value
    }
}
