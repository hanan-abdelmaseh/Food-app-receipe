
import { Component, OnInit } from '@angular/core';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

import { SnakBarComponent } from '../snak-bar/snak-bar.component';

/** interface will be deleted from here*/
export interface Allingredient {
  id:number ,
  name:string 
 }
 /** */

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
  MainIngredientList:Allingredient[]=[];
  /*filterWord*/
  searchWord :any;
  searchedIngredients :Allingredient[] =[];
  durationInSeconds = 5; 
 
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor( private _snackBar: MatSnackBar ) { 
    /*this will change as it will come from data base
    i need to make service */
   this.MainIngredientList=[ {id:1 , name:"Salt"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
   {id:1 , name:"Salt"},
   {id:1 , name:"Oil"},
   {id:1 , name:"Onion"},
   {id:1 , name:"Eggs"},
   {id:1 , name:"Water"},
   {id:1 , name:"Tomato"},
    
]
  }

  ngOnInit(): void {
    this.searchedIngredients = this.MainIngredientList ;
  }
  /*to show suggested container*/
  focusFunction(){
   
    this.visible= true;

  }
  /*to hide suggested cobtainer*/
  onBlur(){
   
    this.visible= false;
   
    
  }
  /* to add selected item ang iput value to arrya 
   to send it to api to get matched data*/
  Add(item:string){
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
  /* to enable user search in ingredient on typing ingredients*/
   search(){
    if(this.searchWord == ""){
      this.ngOnInit();
    }
    else{

      this.searchedIngredients = this.searchedIngredients.filter((response)=>{
             return response.name.toLocaleLowerCase().match(this.searchWord.toLocaleLowerCase());
      })
    }

   }
  
  
   /*snackbar function */
   openSnackBar() {
    this._snackBar.openFromComponent(SnakBarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
