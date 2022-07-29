import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brwosing',
  templateUrl: './brwosing.component.html',
  styleUrls: ['./brwosing.component.css']
})
export class BrwosingComponent implements OnInit {
  title:string = "Browse";
  text :string = "Browse";

  constructor() { }

  ngOnInit(): void {
  }

}
