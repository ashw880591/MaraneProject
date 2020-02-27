import { Component } from '@angular/core';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html'
})
export class MobileComponent {

data=false

student:any[]=[
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'},
    {id:1, name:"abc", city:'pune', email:'abc@gmail.com'}
]

display='c'

number=4

}