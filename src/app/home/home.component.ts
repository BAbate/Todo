import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemcounter: number;
  projectext = " ";
  projects = ["biruk","hanna"];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter = this.projects.length;
  }

  add() { 
      console.log(this.projectext);
      this.projects.push(this.projectext);
      this.itemcounter = this.itemcounter + 1;
  }

  remove(i) {
    this.projects.slice(i,1);
    this.itemcounter -= 1;
  }
}
