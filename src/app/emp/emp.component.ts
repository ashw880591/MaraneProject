import { Component } from '@angular/core';
import { EmpService } from '../service1/emp.service1';


@Component({
 selector:'app-emp',
 templateUrl:'./emp.component.html'

})
export class EmpComponent{
empdata=[]
    constructor(private serviceemp:EmpService){
      this.empdata=this.serviceemp.getdata()
}
}