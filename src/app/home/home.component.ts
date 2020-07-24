import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemcounter: number;
  projectext: string;
  projects= ["biruk","hanna"];

  constructor() { }

  ngOnInit(): void {
    this.itemcounter = this.projects.length;
  }

  add(projectsname) {
    console.log(projectsname);
    this.projects.push(projectsname);
  }

  remove(i) {
    this.projects.slice(i,1);
  }
}
