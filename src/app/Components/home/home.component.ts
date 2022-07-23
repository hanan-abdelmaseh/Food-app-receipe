import { Component, OnInit } from '@angular/core';
import { CarsolService } from 'src/app/Services/carsol.service';
import { CarsolImg } from 'src/app/SharedModule/Interface/carsol-img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   carsolList:CarsolImg[] =[];
  constructor(private _CarsolService:CarsolService) { }

  ngOnInit(): void {

    this.carsolList = this._CarsolService.GetAllItems();
  }

}
