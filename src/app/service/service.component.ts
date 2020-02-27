import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    providers:[DemoService]
})
export class ServiceComponent {
    data
    constructor(private ser:DemoService){
        this.data= this.ser.getdata();

        
    }

}