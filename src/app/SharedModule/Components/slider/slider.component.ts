import { Component, Input, OnInit } from '@angular/core';
import { SliderImg } from '../../Interface/slider-img';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  //we will get images from api 
@Input() images :SliderImg[]=[];

@Input() indicators = true ;
//to know the selected item 
selectedIndex:number =0 ;
// 
@Input() autoSlide = false;
@Input() slideInterval = 3000;

  constructor() { }

  ngOnInit(): void {
   if(this.autoSlide){
    this.autoSlideImg();
   }
  }
  autoSlideImg(){
  setInterval(()=>{
 this.nextImg();
  },this.slideInterval);
  }
  nextImg():void{
    if(this.selectedIndex === this.images.length -1){
          this.selectedIndex =0
        }
    else{
        this.selectedIndex++;
        }
  }



  //to change the index of the img on click 
  selectedImg(index:number){
    this.selectedIndex = index;
  }
}
