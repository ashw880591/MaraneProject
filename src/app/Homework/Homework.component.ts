import { Component } from '@angular/core';

@Component({

    selector:'app-homework',
    templateUrl:'./Homework.component.html',
    styleUrls:['./Homework.component.css']
})

export class HomeworkComponent{
    
    public cls ={
        'color':'yellow',
        'background-color': 'red'
    }

    a=true

    name="Ashwini"

    amount=30

    student:any[]=[
        {id:1 ,fname:"ashwini",lname:"patil",address:"pune",},
        {id:1 ,fname:"ashwini",lname:"patil",address:"pune",},
        {id:1 ,fname:"ashwini",lname:"patil",address:"pune",},
        {id:1 ,fname:"ashwini",lname:"patil",address:"pune",},
    ]

    case="c"
    getdata(){
        this.a=! this.a
    }

}