
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { PantryService } from 'src/app/Services/PantryService/pantry.service';
import { MainReceipe } from 'src/app/viewModel/main-receipe';
import { environment } from 'src/environments/environment';

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
/*matched receipes depend on ingredients*/
AllReceipes: MainReceipe[] = [];
  durationInSeconds = 5; 
  Shown:boolean = true;
  loading: boolean = false;
  p: number = 1;
  count: number = 16;
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor( private _snackBar: MatSnackBar  , 
    private _PantryService:PantryService,
    private httpClient:HttpClient) { 
    }

  ngOnInit(): void {
    this.getAllIngredients();
  }
  /*get all ingredients */
  getAllIngredients():any{
    this._PantryService.getAllIngredients().subscribe((res:any)=>{
      this.MainIngredientList = res ;
    });
  }
  /*to show suggested container*/
  focusFunction(){  
    this.visible= true;
  }
  /*to hide suggested cobtainer*/
  onBlur(){
    this.visible= false;
  }
  /* to add selected item and iput value to array 
   to send it to api to get matched data*/
  Add(item:string){
    console.log("nice");
    this.ingredientList.push(item);
    console.log(this.ingredientList) ;
    return this.ingredientList;

    //this.ingredientList.push(val2);
    //console.log(this.ingredientList) ;
    
  }

  getPantry(ingredient:any , page:number){
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    this.Shown=false;
    console.log("getpantry");
    this.loading = true;
    //console.log(this.ingredientList);
   this.httpClient.post<any>(`https://localhost:7044/api/Recipes/Pantry_readyRecipes?pageNumber=${page}`
   ,ingredient,{headers:httpHeaders,responseType:'json'}).subscribe((res:any)=>{
      //console.log(res);
      this.loading=false;
       this.AllReceipes = res ;
       //console.log(page);
       console.log("welcome from pantry");
       console.log(this.AllReceipes);
   });
  }
  searchPantry(){
    console.log(this.ingredientList);

    this.getPantry(this.ingredientList , 1);
    
  }
  /**to try pagination */
  pagination(){
    console.log(this.p);
  }
  /* to enable user search in ingredient on typing ingredients*/
   search(){
    if(this.searchWord == ""){
      this.ngOnInit();
    }
    else{
      this.MainIngredientList = this.MainIngredientList.filter((response)=>{
             return response.name.toLocaleLowerCase().
             match(this.searchWord.toLocaleLowerCase());
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
