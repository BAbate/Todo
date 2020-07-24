import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemcounter: number;
  projectext: string = 'angular projects';
  projects= [];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter = this.projects.length;
  }

  add(input) {
    console.log(input);
    this.projects.push(input);
  }

  remove(input) {
    this.projects.pop();
  }
}
