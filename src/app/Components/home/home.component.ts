import { Component, OnInit } from '@angular/core';
import { CarsolService } from 'src/app/Services/carsol.service';
import { ReceipesService } from 'src/app/Services/receipes.service';
import { CarsolImg } from 'src/app/SharedModule/Interface/carsol-img';

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
   receipes:any[]=[];
  
   p:number = 1;
   count: number = 5;
  constructor(private _CarsolService:CarsolService ,
              private _ReceipesService:ReceipesService) { 
  }

  ngOnInit(): void {

    this.carsolList = this._CarsolService.GetAllItems();
    this.getAllReceipesData();
  }
  getAllReceipesData(){
    this._ReceipesService.getAllReceipes().subscribe((res:any)=>{
      this.receipes= res;
    });
  }

}
