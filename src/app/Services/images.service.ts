import { Injectable } from '@angular/core';
import { SliderImg } from '../SharedModule/Interface/slider-img';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
private imgList :SliderImg[] =[]
  constructor() {
    this.imgList =[{
      ImgSource:'../../../assets/images/bg_1.jpg',
      imgAlt: 'food1',
  },
  {
    ImgSource:'../../../assets/images/bg_2.jpg',
    imgAlt: 'food1',
},
{
  ImgSource:'../../../assets/images/bg_5.jpg',
  imgAlt: 'food1',
},
{
  ImgSource:'../../../assets/images/bg_4.png',
  imgAlt: 'food1',
}

 
    ]
   }

GetAllImg():SliderImg[]
{
  return this.imgList;
}
}
