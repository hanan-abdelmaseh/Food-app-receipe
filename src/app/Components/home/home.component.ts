import { Component, OnInit } from '@angular/core';
import { CarsolService } from 'src/app/Services/carsol.service';
import { RecipeService } from 'src/app/Services/RecipeServices/recipe-services.service';
import { CarsolImg } from 'src/app/SharedModule/Interface/carsol-img';
import { MainReceipe } from 'src/app/viewModel/main-receipe';

 export interface empolyee {
   name:string,
   age:number ,
   src:string
 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   carsolList:CarsolImg[] =[];

   //
   //receipes
   AllReceipes:MainReceipe[]=[];
   loading:boolean = false;

  /*pagination */
   p:number = 1;
   count: number = 16;
  constructor(private _CarsolService:CarsolService ,
              private _ReceipesService:RecipeService) { 
  }

  ngOnInit(): void {

    this.carsolList = this._CarsolService.GetAllItems();
    this.getAllReceipesData();
  }
  getAllReceipesData(){
    this.loading= true;
    this._ReceipesService.getAllReceipes().subscribe((res:any)=>{
      this.AllReceipes= res;
      this.loading= false;
      console.log(this.AllReceipes);
    }
    );
  }

}
