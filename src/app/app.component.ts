import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Students:any[];
  constructor(){
    this.Students=[
    {
      studentid:1,
      name:'priya',
      gender:'Female',
      age:25,
      course:'MCA'
    },
    {
      studentid:2,
      name:'monaa',
      gender:'Female',
      age:20,
      course:'BCA'
    },
    {
      studentid:3,
      name:'amar',
      gender:'Male',
      age:28,
      course:'MCA'
    },
    {
      studentid:4,
      name:'vishal',
      gender:'Male',
      age:28,
      course:'BCA'
    }
    ];
  }
getmorestudents():void{
this.Students=[
    {
      studentid:1,
      name:'priya',
      gender:'Female',
      age:25,
      course:'MCA'
    },
    {
      studentid:2,
      name:'monaa',
      gender:'Female',
      age:20,
      course:'BCA'
    },
    {
      studentid:3,
      name:'amar',
      gender:'Male',
      age:28,
      course:'MCA'
    },
    {
      studentid:4,
      name:'vishal',
      gender:'Male',
      age:28,
      course:'BCA'
    },
     {
      studentid:5,
      name:'priti',
      gender:'Female',
      age:22,
      course:'BCA'
    }
    ];

  
}
}
