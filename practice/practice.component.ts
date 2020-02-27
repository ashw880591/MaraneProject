import { Component } from '@angular/core';

@Component({
    selector:'app-practice',
    templateUrl:'./practice.component.html',
    styleUrls:['./practice.component.css']
})

export class PracticeComponent{

name="Ashwini"

    a=true

    amount = 20
    StudentRecord :any=[

        {id:1,name:"Renuka",roll_no:12,subject:"Math"},
        {id:1,name:"Renuka",roll_no:12,subject:"Math"},
        {id:1,name:"Renuka",roll_no:12,subject:"Math"},
        {id:1,name:"Renuka",roll_no:12,subject:"Math"}
        
    ]
    display='a'
    public cls={
        'color':"yello",
        'background-color': 'pink'
    }
}