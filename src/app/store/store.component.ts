import { Component } from '@angular/core';

@Component({
    selector:'app-store',
    templateUrl:'./store.component.html',
    styleUrls:['./store.component.css']
})
export class StoreComponent{
    
    name="pune"

    student:any[]=[
        {id:1,roll_no:12, name:"Ashwini", address:"Latur",contact:9876543212,email_id:"ashwini@gmail.com"},
        {id:2,roll_no:22, name:"Rohini", address:"Omerga",contact:8766545667},
        {id:3,roll_no:32, name:"Sumit", address:"Osmanabad",contact:9675747512},
        {id:4,roll_no:23, name:"Vishal", address:"Dange",contact:987655525},
        {id:5,roll_no:14, name:"Sonali", address:"Aundh",contact:9876543212}
    ]
    roll=3



    show=true
  
    clickdata(){
        this.show=!this.show
        console.log(this.name);
    }
    
    }
