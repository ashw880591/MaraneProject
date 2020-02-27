import { Component } from '@angular/core';

@Component({
    selector: 'app-new',
    templateUrl: './newbatch.component.html'
})
export class NewbatchComponent {

    public cls ={
        'color':'yellow',
        'background-color': 'red'
    }

    a=true
    
    name="maharashtra"

    amount=56

    student : any=[
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212},
        {id:1, name:"sachin", email:'awaresachin@gmail.com', city:"Nashik", contact:9876543212}
    ]

    

    case="c"
    getdata(){
        this.a=! this.a
    }
}