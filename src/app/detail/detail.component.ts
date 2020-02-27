import { Component } from '@angular/core';
import { EmpService } from '../service1/emp.service1';

@Component({
    selector:'app-detail',
    templateUrl:'./detail.component.html'
})

export class DetialComponent{
detail :any=[
    {id:1,name:'ashwini',address:'mumbai',contact:987765433}
]
    constructor (private det:EmpService){
        this.det
    }
}