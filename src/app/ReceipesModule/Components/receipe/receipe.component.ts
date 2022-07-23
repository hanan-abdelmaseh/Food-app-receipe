import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
  title:string = "Receipes";
  text:string = "Our Receipes";
  
  Time:string[] =[] ;
    
  constructor() {
    this.Time=["5 Min" , "10 Min" , "15 Min" , "20 Min" , "30 Min" , "1 Hr" , "2Hr"]

   }

  ngOnInit(): void {
  }

}
