import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/Services/images.service';
import { SliderImg } from 'src/app/SharedModule/Interface/slider-img';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
imgagesList:SliderImg[] =[] ;
  constructor(private _ImagesService:ImagesService) { }

  ngOnInit(): void {
this.imgagesList = this._ImagesService.GetAllImg();
  }
   
}
