import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  title:string = "Our Pantry"
  text:string = "Pantry";
  visible:boolean = false;
  ingredientList:string[]=[];
  MainIngredientList:string[]=[];

  
  constructor() { 
   this.MainIngredientList=["Salt","Onion","egg", "Salt","Onion","egg",
   "Salt","Onion","egg", "Salt","Onion","egg" ,"Salt","Onion","egg", "Salt","Onion","egg"
  ,  "Salt","Onion","egg","Salt","Onion","egg","Salt","Onion","egg",
  "egg", "Salt","Onion","egg",
   "Salt","Onion","egg", "Salt","Onion","egg" ,"Salt","Onion","egg", "Salt","Onion","egg"
  ,  "Salt","Onion","egg","Salt","Onion","egg","Salt","Onion","egg",
]
  }

  ngOnInit(): void {
  }
  focusFunction(){
   
    this.visible= true;

  }
  onBlur(){
   
    this.visible= false;
   
    
  }
  printit(item:string){
    console.log("nice");
    this.ingredientList.push(item);
    console.log(this.ingredientList) ;
    return this.ingredientList;

    //this.ingredientList.push(val2);
    //console.log(this.ingredientList) ;
    
  }
  searchPantry(){
    console.log("search");
    console.log(this.ingredientList);
   
  }

}
