import { Component } from '@angular/core';

@Component({
    selector:'app-example',
    templateUrl:'./example.component.html',
    styleUrls:['./example.component.css']
})

export class ExampleComponent{
 
    name="Ashwini"
    data=true
    'color':'red'
    
    student : any=[
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433},
        {id:1,name:'ashwini',address:'pune',email:'ash@gmail.com',contact:9876655433}
       
    ]
    Clickdata(){
        this.data=!this.data
    }
}