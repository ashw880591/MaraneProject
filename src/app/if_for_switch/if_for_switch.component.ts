import { Component } from '@angular/core';

@Component({
    selector:'app-iffor',
    templateUrl:'./if_for_switch.component.html',
    styleUrls:['./if_for_switch.component.css']
})


export class IfforswitchComponent
{
    name='ashwini'
    a=true
    stud : any=[
        {id:1,name:'ashwini',address:'pune',contact:98877654333},
        {id:1,name:'ashwini',address:'pune',contact:98877654333},
        {id:1,name:'ashwini',address:'pune',contact:98877654333},
        {id:1,name:'ashwini',address:'pune',contact:98877654333}
    ]

    Show='1'

    number=6 
}