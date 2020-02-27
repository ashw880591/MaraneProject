import { Component } from '@angular/core';
import { EmpService } from '../service1/emp.service1';

@Component({
    selector:'app-college',
    templateUrl:'./college.component.html'
})

export class CollegeComponent{
    constructor( private as: EmpService){
        this.as
}
}