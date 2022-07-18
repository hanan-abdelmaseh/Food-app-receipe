import { Component, Input, OnInit } from '@angular/core';
import { CarsolService } from 'src/app/Services/carsol.service';
import { CarsolImg } from '../../Interface/carsol-img';

@Component({
  selector: 'app-carsol',
  templateUrl: './carsol.component.html',
  styleUrls: ['./carsol.component.css']
})
export class CarsolComponent implements OnInit {
  @Input() carsolItems:CarsolImg[]=[];
  selectedIndex:number =0 ;


  ////controls 


  constructor() {
   
   }

  ngOnInit(): void {
  }
  onPrev(){
    console.log(this.selectedIndex);
    console.log(this.carsolItems.length -1)

    if( this.selectedIndex === 0)
     {
      this.selectedIndex === this.carsolItems.length -1 ;
    }
     else{
    this.selectedIndex--;
    }

  }
  onNext(){
    console.log(this.selectedIndex);
    console.log(this.carsolItems.length -1)
    if(this.selectedIndex === this.carsolItems.length -1){
      this.selectedIndex =0
    }
else{
    this.selectedIndex++;
    } 
  }
}
