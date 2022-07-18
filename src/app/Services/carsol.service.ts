import { Injectable } from '@angular/core';
import { CarsolImg } from '../SharedModule/Interface/carsol-img';

@Injectable({
  providedIn: 'root'
})
export class CarsolService {
  private carsolItemList :CarsolImg[] =[]
  constructor() {
    this.carsolItemList=[
      {  Id:1,
         ImgSource:"../../../../assets/images/browse-1.jpg",
         Title:"Chicken Breasts",
      },
      {  Id:2,
        ImgSource:"../../../../assets/images/browse-2.png",
        Title:"Chicken Breasts",
     },
     {  Id:3,
      ImgSource:"../../../../assets/images/browse-3.jpg",
      Title:"Chicken Breasts",
   },
   {  Id:4,
    ImgSource:"../../../../assets/images/browse-4.jpg",
    Title:"Chicken Breasts",
 },
 {  Id:5,
  ImgSource:"../../../../assets/images/browse-5.jpg",
  Title:"Chicken Breasts",
},
{  Id:6,
  ImgSource:"../../../../assets/images/browse-6.jpg",
  Title:"Chicken Breasts",
},
{  Id:7,
  ImgSource:"../../../../assets/images/browse-7.jpg",
  Title:"Chicken Breasts",
},
{  Id:8,
  ImgSource:"../../../../assets/images/browse-8.jpg",
  Title:"Chicken Breasts",
},
{  Id:9,
  ImgSource:"../../../../assets/images/browse-9.jpg",
  Title:"Chicken Breasts",
},
{  Id:10,
  ImgSource:"../../../../assets/images/browse-10.jpg",
  Title:"Chicken Breasts",
},
{  Id:11,
  ImgSource:"../../../../assets/images/browse-11.jpg",
  Title:"Chicken Breasts",
},
{  Id:12,
  ImgSource:"../../../../assets/images/browse-12.jpg",
  Title:"Chicken Breasts",
},
{  Id:13,
  ImgSource:"../../../../assets/images/browse-13.jpg",
  Title:"Chicken Breasts",
},
{  Id:14,
  ImgSource:"../../../../assets/images/browse-14.jpg",
  Title:"Chicken Breasts",
},

    

    ]

   }
   GetAllItems():CarsolImg[]
{
  return this.carsolItemList;
}
}
