import { Component } from '@angular/core';

@Component({

    selector:'app-program',
    templateUrl:'./program.component.html',
    styleUrls:['program.component.css']

})
export class ProgramComponent{

    a=true
    name ="ashwini"
   
    public cls ={
        'color':'yelow',
        'background-color':'red'
    }
    record : any=[
        {id:1,name:"ashwini",address:"pune"}
    ]
    Clickdata(){
        this.a=!this.a
    }
}