import { Injectable } from '@angular/core';

@Injectable()

export class EmpService{

    getdata(){
        return[
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345},
            {id:1,name:'ashwini',address:'pune',contact:98765433345}
        ]
    }
}