import { Injectable } from '@angular/core';

@Injectable()

export class DemoService {

    student=[
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332},
        {id:1,name:'abc',city:'pune',email:'abc@gmail.com',contact:987654332}
    ]

    getdata(){
        return this.student;
    }
}