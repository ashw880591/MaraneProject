import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
    selector:'app-pipe',
    templateUrl:'./pipe.component.html',
    styleUrls:['./pipe.component.css']
})

export class PipeComponent{

  constructor( private der: DemoService){
this.der
  }
title="my-first-app"
todaydate= new Date()
currency=23

jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}}; 
 
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
    

}  
