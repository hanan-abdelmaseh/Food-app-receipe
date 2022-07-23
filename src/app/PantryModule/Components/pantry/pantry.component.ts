import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  title:string = "Our Pantry"
  text:string = "Pantry"
  constructor() { }

  ngOnInit(): void {
  }

}
