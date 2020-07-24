import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name = 'Biruk';
  input= '';
  todo: any = [
    {
      name:'Biruk',
      age: 25
    },
    {
      name:'Sam',
      age: 24
    }

  ];
  
  lists: string[] = ['abebe','kebede'];

  ages = '92';

  add (myinputs) {
    console.log(myinputs.value);
    this.todo.push(myinputs.value);
  }

}
