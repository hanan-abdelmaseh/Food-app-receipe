import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title:string ="";
@Input() text:string ="";
@Input() imgSrc:string="";
/*add to collection button */
toppings = new FormControl('');
toppingList: string[] = ['Extra cheese', 'Mushroom', 
                          'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
//testing

constructor() { }

  ngOnInit(): void {
  }

}
